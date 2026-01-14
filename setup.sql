-- -----------------------------------------------------------------------------
-- 0. Cleanup existing objects
-- -----------------------------------------------------------------------------
drop table if exists public.products cascade;
drop table if exists public.services cascade;
drop table if exists public.tests cascade;
-- Keeping site_content and blogs if they are used by other parts of the app, 
-- but ensuring services/tests are clean.

-- -----------------------------------------------------------------------------
-- 1. Table: services
-- -----------------------------------------------------------------------------
create table public.services (
  id text primary key,
  service_type text not null,
  unit text,
  price numeric default 0,
  qty numeric default 1,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.services enable row level security;

create policy "Services are viewable by everyone"
  on public.services for select
  using ( true );

create policy "Allow public management of services"
  on public.services for all
  using ( true )
  with check ( true );

-- -----------------------------------------------------------------------------
-- 2. Table: tests
-- -----------------------------------------------------------------------------
create table public.tests (
  id text primary key,
  test_type text not null,
  materials text,
  "group" text, -- "group" is a reserved keyword, so quote it
  test_method_specification text,
  num_days numeric default 0,
  price numeric default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.tests enable row level security;

create policy "Tests are viewable by everyone"
  on public.tests for select
  using ( true );

create policy "Allow public management of tests"
  on public.tests for all
  using ( true )
  with check ( true );

-- -----------------------------------------------------------------------------
-- 3. Insert sample data
-- -----------------------------------------------------------------------------

-- Sample Services
insert into public.services (id, service_type, unit, price, qty) values
('S1', 'Drilling Upto 10m', 'Per Metre', 1000, 1),
('S2', 'Drilling 10m to 20m', 'Per Metre', 1500, 1);

-- Sample Tests
insert into public.tests (id, test_type, materials, "group", test_method_specification, num_days, price) values
('T1', 'Organic Impurities Analysis', 'Aggregate (Coarse)', 'Chemical', 'IS2385 (Part2)', 6, 3000),
('T2', 'Sieve Analysis', 'Aggregate (Coarse)', 'Physical', 'IS2386 (Part1)', 2, 500);
