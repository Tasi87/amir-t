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
    return NextResponse.json({ message: "Nenájdené" }, { status: 404 });
  }

  todos.splice(index, 1);
  return NextResponse.json({ message: "Zmazané" });
}
