// Imports
import { NextResponse } from "next/server";
import { todos } from "@/features/todo/store";
//-----------------------------

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  todos.splice(index, 1);
  return NextResponse.json({ message: "Deleted" });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await request.json();

  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  todo.completed = body.completed;
  return NextResponse.json(todo);
}
