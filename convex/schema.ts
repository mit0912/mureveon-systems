import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  inquiries: defineTable({
    fullName: v.string(),
    companyName: v.string(),
    email: v.string(),
    phone: v.string(),
    serviceInterest: v.string(),
    projectDescription: v.string(),
    budgetRange: v.string(),
  }),
  newsletter_subscribers: defineTable({
    email: v.string(),
  }).index("by_email", ["email"]),
  consultation_requests: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.string(),
    preferredDate: v.string(),
    message: v.string(),
  }),
});
