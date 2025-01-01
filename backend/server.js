const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

// Initialize Supabase client
const supabaseUrl = "https://rvaefaqthnccqopuikmu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2YWVmYXF0aG5jY3FvcHVpa211Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyMTA5NDYsImV4cCI6MjA1MDc4Njk0Nn0.id5QHaOuMGg1N1ipI6dUg4ml7ZFlUcVkbwqHmmwSVd0";
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Battlefield 4!");
});

app.get("/api/battlefield", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("battlefield")
      .select("players, ping, tickrate")
      .single();

    if (error) {
      console.error("Error fetching settings:", error);
      return res.status(500).json({ error: "Failed to fetch settings" });
    }

    res.json(data);
  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/battlefield-settings", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("battlefield_settings")
      .select("region, punkbuster, fairfight, password, preset")
      .single();

    if (error) {
      console.error("Error fetching settings:", error);
      return res.status(500).json({ error: "Failed to fetch settings" });
    }

    res.json(data);
  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/battlefield-advanced", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("battlefield_advanced")
      .select(
        `"minimap", "only squad leader spawn", "vehicles", "team balance", "minimap spotting", "hud", "3p vehicle cam", "regenerative health", "kill cam", "friendly fire", "3d spotting", "enemy name tags"`
      )
      .single();

    if (error) {
      console.error("Error fetching settings:", error);
      return res.status(500).json({ error: "Failed to fetch settings" });
    }

    res.json(data);
  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/battlefield-rules", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("battlefield_rules")
      .select(
        `"tickets", "vehicle spawn delay", "bullet damage", "kick after team kills", "player health", "player respawn time", "kick after idle", "ban after kicks"`
      )
      .single();

    if (error) {
      console.error("Error fetching settings:", error);
      return res.status(500).json({ error: "Failed to fetch settings" });
    }

    res.json(data);
  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
