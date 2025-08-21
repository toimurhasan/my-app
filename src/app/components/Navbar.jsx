"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
      <Link href="/" className="text-xl font-bold">
        MyStore
      </Link>
      <div className="flex gap-6">
        <Link className="cursor-pointer" href="/">
          Home
        </Link>
        <Link className="cursor-pointer" href="/products">
          Products
        </Link>
        {session ? (
          <>
            <Link className="cursor-pointer" href="/dashboard/add-product">
              Add Product
            </Link>
            <button className="cursor-pointer" onClick={() => signOut()}>
              Logout
            </button>
          </>
        ) : (
          <button className="cursor-pointer" onClick={() => signIn()}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
