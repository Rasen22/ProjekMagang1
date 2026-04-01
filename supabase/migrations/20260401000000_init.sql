create extension if not exists "pgcrypto";

create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references public.users(id) on delete cascade,
  title text not null,
  content text not null,
  created_at timestamptz not null default now()
);

alter table public.users enable row level security;
alter table public.posts enable row level security;

create policy "users_select_own"
on public.users
for select
using (auth.uid() = id);

create policy "posts_select_all"
on public.posts
for select
using (true);

create policy "posts_insert_own"
on public.posts
for insert
with check (auth.uid() = author_id);
