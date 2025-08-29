import { createClient } from "@supabase/supabase-js";

const VITE_SUPABASE_URL="https://ikfxgrciyurcylfwycqa.supabase.co";

const VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY="sb_publishable_vsdxxMkvjXq5gaInn4bSJQ_1_MOSwEO";

export const supabase = createClient(VITE_SUPABASE_URL,VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY);