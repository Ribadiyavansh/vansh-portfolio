"use client";

import { useEffect, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Trash2, Edit, Plus, Eye, Sparkles } from "lucide-react";
import Link from "next/link";
import { createBlogPost } from "./actions";
import { useToast } from "@/hooks/use-toast";
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react";

async function fetchBlogPosts() {
  const res = await fetch('/api/blog', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  const { posts } = await res.json();
  return posts;
}
import { formatDate } from "@/lib/utils";
import { PasswordProtection } from "./password";

interface BlogPost {
  metadata: { [key: string]: any };
  slug: string;
  source: string;
}

export default function AdminPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [createFormRef, setCreateFormRef] = useState<HTMLFormElement | null>(null);

  const { toast } = useToast();

  useEffect(() => {
    // Check authentication
    const authenticated = localStorage.getItem("admin-authenticated") === "true";
    setIsAuthenticated(authenticated);

    if (authenticated) {
      loadPosts();
    } else {
      setLoading(false);
    }
  }, []);

  const loadPosts = async () => {
    try {
      const blogPosts = await fetchBlogPosts();
      setPosts(blogPosts);
    } catch (error) {
      console.error("Error loading posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = async (formData: FormData) => {
    setIsCreating(true);
    try {
      const result = await createBlogPost(formData);
      if (result.success) {
        toast({
          title: "Success!",
          description: "Blog post created successfully!",
          variant: "default",
        });
        setCreateDialogOpen(false);
        // Reset form
        createFormRef?.reset();
        // Reload posts
        loadPosts();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create blog post. Please try again.",
        variant: "destructive",
      });
      console.error("Error creating post:", error);
    } finally {
      setIsCreating(false);
    }
  };

  const handleAIGeneratePost = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/generate-blog', {
        method: 'GET',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate blog post');
      }

      toast({
        title: "AI Blog Generated!",
        description: `${data.title} has been published successfully!`,
        variant: "default",
      });

      // Reload posts to show the new one
      loadPosts();

    } catch (error: any) {
      toast({
        title: "Generation Failed",
        description: error.message || "Failed to generate blog post. Please try again.",
        variant: "destructive",
      });
      console.error("Error generating AI blog:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  if (!isAuthenticated) {
    return <PasswordProtection onSuccess={() => {
      setIsAuthenticated(true);
      setLoading(true);
      loadPosts();
    }} />;
  }

  return (
    <section className="container px-4 py-8 ">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-2 items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your blog posts</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  New Post
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  handleCreatePost(formData);
                }}
                className="space-y-4"
                ref={(form) => setCreateFormRef(form)}
              >
                <DialogHeader>
                  <DialogTitle>Create New Blog Post</DialogTitle>
                  <DialogDescription>
                    Write a new blog post. The slug will be generated automatically from the title.
                  </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder="Enter post title..."
                      required
                      disabled={isCreating}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="summary">Summary *</Label>
                    <Textarea
                      id="summary"
                      name="summary"
                      placeholder="Enter post summary..."
                      rows={3}
                      required
                      disabled={isCreating}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="image">Image URL (optional)</Label>
                    <Input
                      id="image"
                      name="image"
                      placeholder="https://example.com/image.jpg"
                      type="url"
                      disabled={isCreating}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="content">Content (Markdown) *</Label>
                    <Textarea
                      id="content"
                      name="content"
                      placeholder="# Your content here

Write your blog post in Markdown format...

## Features

- Code highlighting
- Tables
- Lists
- Links

## Code Example

```javascript
console.log('Hello World!');
```"
                      rows={12}
                      className="font-mono text-sm"
                      required
                      disabled={isCreating}
                    />
                  </div>
                </div>

                <DialogFooter>
                  <Button type="submit" disabled={isCreating}>
                    {isCreating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      "Create Post"
                    )}
                  </Button>
                </DialogFooter>
              </form>
              </DialogContent>
            </Dialog>

            <Button
              onClick={handleAIGeneratePost}
              disabled={isGenerating}
              variant="outline"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 hover:from-purple-600 hover:to-pink-600"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate AI Blog
                </>
              )}
            </Button>
          </div>

        {/* Posts List */}
        <div className="grid gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">All Posts ({posts.length})</h2>
          </div>

          {posts.length === 0 ? (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center text-muted-foreground">
                  <p>No blog posts yet. Create your first post to get started!</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 ">
              {posts
                .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
                .map((post) => (
                  <Card key={post.slug} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg truncate">{post.metadata.title}</CardTitle>
                          <CardDescription className="mt-1">
                            {formatDate(post.metadata.publishedAt)}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                          <Link href={`/blog/${post.slug}`} prefetch={false}>
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                              <span className="sr-only">View</span>
                            </Button>
                          </Link>

                          {/* Edit Dialog */}
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <Edit className="w-4 h-4" />
                                <span className="sr-only">Edit</span>
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                              <form action={`/api/blog/${post.slug}`}
                                    method="POST"
                                    encType="multipart/form-data"
                                    className="space-y-4">
                                <input type="hidden" name="_method" value="PUT" />
                                <DialogHeader>
                                  <DialogTitle>Edit Blog Post</DialogTitle>
                                  <DialogDescription>
                                    Make changes to your blog post. The publish date will be preserved.
                                  </DialogDescription>
                                </DialogHeader>

                                <div className="grid gap-4 py-4">
                                  <div className="grid gap-2">
                                    <Label htmlFor="edit-title">Title *</Label>
                                    <Input
                                      id="edit-title"
                                      name="title"
                                      defaultValue={post.metadata.title}
                                      required
                                    />
                                  </div>

                                  <div className="grid gap-2">
                                    <Label htmlFor="edit-summary">Summary *</Label>
                                    <Textarea
                                      id="edit-summary"
                                      name="summary"
                                      defaultValue={post.metadata.summary}
                                      rows={3}
                                      required
                                    />
                                  </div>

                                  <div className="grid gap-2">
                                    <Label htmlFor="edit-image">Image URL (optional)</Label>
                                    <Input
                                      id="edit-image"
                                      name="image"
                                      defaultValue={post.metadata.image || ""}
                                      type="url"
                                    />
                                  </div>

                                  <div className="grid gap-2">
                                    <Label htmlFor="edit-content">Content (Markdown) *</Label>
                                    <Textarea
                                      id="edit-content"
                                      name="content"
                                      defaultValue={post.source}
                                      rows={12}
                                      className="font-mono text-sm"
                                      required
                                    />
                                  </div>
                                </div>

                                <DialogFooter>
                                  <Button type="submit">Update Post</Button>
                                </DialogFooter>
                              </form>
                            </DialogContent>
                          </Dialog>

                          {/* Delete Form */}
                          <form action={`/api/blog/${post.slug}`}
                                method="POST"
                                onSubmit={(e) => {
                                  const confirmed = window.confirm('Are you sure you want to delete this blog post?');
                                  if (!confirmed) {
                                    e.preventDefault();
                                  }
                                }}>
                            <input type="hidden" name="_method" value="DELETE" />
                            <Button variant="ghost" size="sm" type="submit" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                              <Trash2 className="w-4 h-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </form>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {post.metadata.summary}
                      </p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          )}
        </div>
      </div>
      </div>
    </section>
  );
}
