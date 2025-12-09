import { updateBlogPost, deleteBlogPost } from "@/app/admin/actions";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const formData = await request.formData();
    await updateBlogPost(params.slug, formData);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating blog post:", error);
    return NextResponse.json(
      { error: "Failed to update blog post" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await deleteBlogPost(params.slug);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return NextResponse.json(
      { error: "Failed to delete blog post" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const formData = await request.formData();
    const method = formData.get('_method') as string;

    if (method === 'PUT') {
      // Handle PUT via POST with _method override
      return PUT(request, { params });
    } else if (method === 'DELETE') {
      // Handle DELETE via POST with _method override
      return DELETE(request, { params });
    }

    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  } catch (error) {
    console.error("Error processing POST request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
