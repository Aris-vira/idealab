/*
# Create favorite palettes table

1. New Tables
- `favorite_palettes`
  - `id` (uuid, primary key)
  - `scheme` (text, the color harmony used to generate the palette)
  - `colors` (text array, the five hex color codes)
  - `created_at` (timestamp, defaults to now)

2. Security
- Enable RLS on `favorite_palettes`.
- Grant SELECT, INSERT, DELETE to `anon` and `authenticated`, since the app has no sign-in and every visitor uses the anon key.
- Policies allow anon and authenticated users to read, save, and remove palettes. The data is intentionally shared, matching the rest of the app.
*/

CREATE TABLE IF NOT EXISTS favorite_palettes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  scheme text NOT NULL,
  colors text[] NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE favorite_palettes ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, DELETE ON favorite_palettes TO anon, authenticated;

DROP POLICY IF EXISTS "anon_select_favorite_palettes" ON favorite_palettes;
CREATE POLICY "anon_select_favorite_palettes" ON favorite_palettes FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_favorite_palettes" ON favorite_palettes;
CREATE POLICY "anon_insert_favorite_palettes" ON favorite_palettes FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_favorite_palettes" ON favorite_palettes;
CREATE POLICY "anon_delete_favorite_palettes" ON favorite_palettes FOR DELETE
  TO anon, authenticated USING (true);
