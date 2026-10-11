# 🛒 বাজার দর (BazarDor)

> প্রয়োজনীয় পণ্যের দাম এক নজরে।

**BazarDor** is a responsive web app that shows daily market prices of essential products in Bangladesh, such as rice, pulses, oil, vegetables, fish, meat, eggs and spices. Users can see which prices went up or down today, browse products by category, sort by price, and view market-wise price details after signing in.

🔗 **Live Site:** [your-live-link.vercel.app](https://your-live-link.vercel.app)
📦 **GitHub Repo:** [github.com/your-username/bazardor](https://github.com/your-username/bazardor)

---

## ✨ Key Features

1. **Daily price tracking:** the home page shows the top 6 risers (আজ দাম বেড়েছে ▲) and the top 6 fallers (আজ দাম কমেছে ▼), plus a responsive grid of all products.
2. **Category browsing:** every category has its own page with an icon, product cards and a skeleton loader while data is fetching.
3. **Sort by price:** a dropdown with `ডিফল্ট`, `দাম: কম থেকে বেশি` and `দাম: বেশি থেকে কম`, sorted by numeric value.
4. **Authentication:** email/password, Google and GitHub login using Better Auth, with toast messages for success and error.
5. **Protected product details:** the `/product/[slug]` page requires login and shows min, max and average price along with prices from different bazaars.
6. **Update profile:** logged-in users can update their name from the profile page using Better Auth's `updateUser`.
7. **Dynamic Bangla date:** the navbar shows today's date in Bangla, based on Bangladesh time.
8. **Fully responsive:** works on mobile, tablet and desktop, with a friendly 404 page for invalid routes.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| [Next.js](https://nextjs.org/) (App Router) | UI and routing |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [DaisyUI](https://daisyui.com/) | Component library (dropdown, skeleton) |
| [Better Auth](https://better-auth.com/) | Authentication (email/password, Google, GitHub) |
| [react-hot-toast](https://react-hot-toast.com/) | Toast notifications |
| JavaScript | Programming language |
| Vercel | Deployment |

---

## 🌐 API

Base URL: `https://openapi.programming-hero.com/api/bazardor`

| Endpoint | Description |
|---|---|
| `/products` | All products |
| `/products?category=chal` | Products filtered by category |
| `/products/1` | Single product |
| `/categories` | All categories |
| `/categories/chal` | Single category |

---

## 🚀 Getting Started

**1. Clone the repository**

```bash
git clone https://github.com/your-username/bazardor.git
cd bazardor
```

**2. Install dependencies**

```bash
npm install
```

**3. Create a `.env` file in the project root**

```env
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

DATABASE_URL=your_database_connection_string
```

**4. Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/        # Navbar, Menu, Banner, ProductCard, Footer...
│   ├── category/[slug]/   # Category page
│   ├── product/[slug]/    # Product details (protected)
│   ├── profile/           # My profile and update page
│   ├── signin/            # Sign in page
│   ├── signup/            # Sign up page
│   └── not-found.jsx      # 404 page
├── lib/
│   └── auth-client.js     # Better Auth client
└── proxy.js               # Route protection
```

---

## 🔐 Authentication Notes

- Protected routes (`/product/*`, `/profile`) redirect to `/signin` if the user is not logged in.
- For Google and GitHub login, add your callback URL in each provider's console:
  `https://your-live-link.vercel.app/api/auth/callback/google`
  `https://your-live-link.vercel.app/api/auth/callback/github`

---

## 📌 Disclaimer

সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।

---

Made with ❤️ for the Programming Hero assignment.