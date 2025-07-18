
import express from "express";
import { fallbackCategories, fallbackProducts } from "./data/fallback.js";

export async function registerRoutes(app: express.Application) {
  // API Routes
  app.get("/api/categories", async (req, res) => {
    try {
      // Use fallback data for now
      res.json(fallbackCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  });

  app.get("/api/products", async (req, res) => {
    try {
      const { category, search, featured } = req.query;
      let products = fallbackProducts;

      if (category) {
        products = products.filter(p => p.categoryId === parseInt(category as string));
      }

      if (search) {
        const searchTerm = (search as string).toLowerCase();
        products = products.filter(p => 
          p.name.toLowerCase().includes(searchTerm) ||
          p.nameBn.toLowerCase().includes(searchTerm)
        );
      }

      if (featured === 'true') {
        products = products.filter(p => p.featured);
      }

      res.json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  app.get("/api/products/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid product ID" });
      }

      const product = fallbackProducts.find(p => p.id === id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      res.json(product);
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({ error: "Failed to fetch product" });
    }
  });

  app.post("/api/orders", async (req, res) => {
    try {
      const orderData = req.body;
      // Process order (implement your order logic here)
      const orderId = `TRX-${Date.now()}`;
      
      res.json({ 
        success: true, 
        orderId,
        message: "Order placed successfully" 
      });
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ error: "Failed to create order" });
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const { email } = req.body;
      // Process newsletter subscription
      res.json({ 
        success: true, 
        message: "Successfully subscribed to newsletter" 
      });
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      res.status(500).json({ error: "Failed to subscribe" });
    }
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "OK", timestamp: new Date().toISOString() });
  });
}
