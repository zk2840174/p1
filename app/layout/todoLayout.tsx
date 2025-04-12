import { Link, Outlet } from 'react-router'

export default function TodoLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-blue-600 text-white p-4 shadow-md">
                <h1 className="text-2xl font-bold">Todo App</h1>
                <nav className="mt-2">
                    <ul className="flex gap-4">
                        <li>
                            <Link to="/todo/list" className="hover:underline">Todo List</Link>
                        </li>
                        <li>
                            <Link to="/todo/add" className="hover:underline">Add Todo</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="flex-1 p-6 bg-gray-50">
                <Outlet />
            </main>
        </div>
    )
}
