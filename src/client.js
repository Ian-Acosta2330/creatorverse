import { createClient } from "@supabase/supabase-js";

const URL = 'https://ikfxgrciyurcylfwycqa.supabase.co';
const API_KEY = 'sb_publishable_vsdxxMkvjXq5gaInn4bSJQ_1_MOSwEO';

export const supabase = createClient(URL,API_KEY);