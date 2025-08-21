import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "write username" },
        password: { label: "Password", type: "password", placeholder: "write password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials;

        // ✅ Simple hardcoded login check
        if (username === "user" && password === "password") {
          return { id: "1", name: "Demo User", email: "user@example.com" };
        }

        // ❌ Invalid credentials
        return null;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET, // ← Add this

  callbacks: {
    async redirect({ baseUrl }) {
      // Always redirect to products after login
      return `${baseUrl}/products`;
    },
  },
});

export { handler as GET, handler as POST };
