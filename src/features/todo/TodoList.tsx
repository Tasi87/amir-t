"use client";
// Imports
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import type { Todo } from "./types";
//-----------------------------

export default function TodoList() {
  const t = useTranslations("todo");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");

  // Loading
  useEffect(() => {
    fetch("/api/todos").then((res) => res.json().then(setTodos));
  }, []);

  // Adding
  async function handleAdd(event: React.FormEvent) {
    event.preventDefault();
    if (!title.trim()) return;

    const res = await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    const newTodo: Todo = await res.json();

    setTodos((prev) => [...prev, newTodo]);
    setTitle("");
  }

  // Deleting
  async function handleDelete(id: string) {
    await fetch(`/api/todos/${id}`, { method: "DELETE" });
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  // Adding form
  return (
    <div>
      <form onSubmit={handleAdd} className="mb-6 flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={t("placeholder")}
          className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
        />
        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
        >
          {t("add")}
        </button>
      </form>
      {todos.length === 0 ? (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {t("empty")}
        </p>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-2.5 dark:border-slate-800"
            >
              <span className="text-sm text-slate-700 dark:text-slate-300">
                {todo.title}
              </span>
              <button
                onClick={() => handleDelete(todo.id)}
                className="text-xs font-medium text-slate-400 hover:text-red-600 dark:text-slate-500 dark:hover:text-red-400"
              >
                {t("delete")}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
