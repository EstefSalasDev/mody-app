import { createClient } from "@supabase/supabase-js";

// Reemplaza con tus claves reales de Supabase
const supabaseUrl = "https://tu-proyecto.supabase.co"; // URL de tu proyecto Supabase
const supabaseAnonKey = "tu-anon-key"; // Clave anónima de Supabase

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
