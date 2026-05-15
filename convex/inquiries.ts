import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const submitInquiry = mutation({
  args: {
    fullName: v.string(),
    companyName: v.string(),
    email: v.string(),
    phone: v.string(),
    serviceInterest: v.string(),
    projectDescription: v.string(),
    budgetRange: v.string(),
  },
  returns: v.id("inquiries"),
  handler: async (ctx, args) => {
    return await ctx.db.insert("inquiries", args);
  },
});

export const subscribeNewsletter = mutation({
  args: {
    email: v.string(),
  },
  returns: v.id("newsletter_subscribers"),
  handler: async (ctx, args) => {
    return await ctx.db.insert("newsletter_subscribers", { email: args.email });
  },
});
