using Backend.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;


namespace Backend.DAL
{
    public class LocalDbContext : DbContext
    {
        public LocalDbContext() : base("LocalDbContext") {}

        public DbSet<User> Users { get; set; }
        public DbSet<Requirement> Requirements { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<SmartHome> SmartHomes { get; set; }
        public DbSet<NotifiedUser> NotifiedUsers { get; set; }
        public DbSet<Conversation> Conversations { get; set; }
        public DbSet<Announcement> Announcements { get; set; }
        public DbSet<Invoice> Invoices { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Tax> Taxes { get; set; }
        public DbSet<Vote> Votes { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}