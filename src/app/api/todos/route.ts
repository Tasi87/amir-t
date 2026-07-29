// Imports
import { NextResponse } from "next/server";
import type { Todo } from "@/features/todo/types";
import { todos } from "@/features/todo/store";
//-----------------------------

export async function GET() {
  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const body = await request.json();

  const newTodo: Todo = {
    id: crypto.randomUUID(),
    title: body.title,
    completed: false,
  };

  todos.push(newTodo);

  return NextResponse.json(newTodo, { status: 201 });
}
