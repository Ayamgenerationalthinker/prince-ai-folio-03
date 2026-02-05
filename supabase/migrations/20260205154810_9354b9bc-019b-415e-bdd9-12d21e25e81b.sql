-- Add restrictive RLS policies for posts table
-- Since this is a read-only public blog (posts sourced from external CMS), 
-- we explicitly DENY all write operations via RLS

-- Policy to deny all INSERT operations (no one can insert via API)
CREATE POLICY "No one can insert posts via API" 
ON public.posts 
FOR INSERT 
WITH CHECK (false);

-- Policy to deny all UPDATE operations (no one can update via API)
CREATE POLICY "No one can update posts via API" 
ON public.posts 
FOR UPDATE 
USING (false);

-- Policy to deny all DELETE operations (no one can delete via API)
CREATE POLICY "No one can delete posts via API" 
ON public.posts 
FOR DELETE 
USING (false);