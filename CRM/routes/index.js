const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");

// List customers
router.get("/", async (req, res) => {
  const customers = await Customer.find();
  res.render("index", { customers });
});

// Add customer form
router.get("/add", (req, res) => {
  res.render("add");
});

// Create customer
router.post("/add", async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.redirect("/");
});

// Edit customer form
router.get("/edit/:id", async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  res.render("edit", { customer });
});

// Update customer
router.post("/edit/:id", async (req, res) => {
  await Customer.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
});

// Delete customer
router.post("/delete/:id", async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

module.exports = router;
