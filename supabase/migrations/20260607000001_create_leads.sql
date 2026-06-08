create table if not exists leads (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  phone       text,
  type        text,
  layout      text,
  city        text,
  timeline    text,
  message     text,
  created_at  timestamptz not null default now()
);

alter table leads enable row level security;

-- Only service role can read/write
create policy "service role full access" on leads
  for all using (auth.role() = 'service_role');
