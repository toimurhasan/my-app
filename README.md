# MyStore - Next.js Product App

A simple **Next.js 13+ App Router project** showcasing public and protected pages, product listings, product details, and authentication using **NextAuth**.

Users can:

- Browse products without logging in
- View product details
- Log in via credentials (`username: user`, `password: password`)
- Access protected page to add a new product

---

## 🛠 Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/my-store.git
cd my-store
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file at the root:

```
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
```

> If using Google login or other providers, add their credentials here:

```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### 5. Deployment

Deploy on **Vercel** for production. Make sure to set the same environment variables on the Vercel dashboard.

---

## 🚀 Routes Summary

| Route                    | Description                                                    | Access    |
| ------------------------ | -------------------------------------------------------------- | --------- |
| `/`                      | Landing page with navbar, hero, product highlights, and footer | Public    |
| `/login`                 | Login page using NextAuth credentials or social login          | Public    |
| `/products`              | List of all products                                           | Public    |
| `/products/[id]`         | Product details page for a single product                      | Public    |
| `/dashboard/add-product` | Add a new product form                                         | Protected |

---

## 📂 Project Structure

```
/src
 ├── app
 │    ├── layout.jsx
 │    ├── page.jsx                 # Landing page
 │    ├── login/page.jsx           # Login page
 │    ├── products/page.jsx        # Product list
 │    ├── products/[id]/page.jsx   # Product details
 │    ├── dashboard/add-product/page.jsx # Protected form
 ├── components
 │    ├── Navbar.jsx
 │    ├── Hero.jsx
 │    ├── Footer.jsx
 │    ├── ProductCard.jsx
 ├── data
 │    └── products.json
 ├── pages
 │    └── api
 │         ├── auth/[...nextauth].ts   # NextAuth API
 │         └── products.js             # Products API
```

---

## ⚡ Features

- Next.js 13+ App Router
- NextAuth for authentication
- Protected pages with `useSession`
- Mock products backend via API route
- TailwindCSS for styling
