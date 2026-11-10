const STORAGE_KEY = "desklist.todos";

export function loadTodos(fallback) {
  const raw = localStorage.getItem(STORAGE_KEY);
  const parsed = JSON.parse(raw);
  return parsed.map((todo) => ({ ...todo }));
}

export function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, todos);
}
