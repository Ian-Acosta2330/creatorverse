import { createClient } from "@supabase/supabase-js";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const URL = 'https://ikfxgrciyurcylfwycqa.supabase.co';
const API_KEY = 'sb_publishable_vsdxxMkvjXq5gaInn4bSJQ_1_MOSwEO';

export const supabase = createClient(URL,API_KEY);

export default function Client() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}