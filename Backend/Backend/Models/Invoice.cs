using System;

namespace Backend.Models
{
    public class Invoice
    {
        // Id, Date, User, Amount, IsPaid(boolean)
        public int Id { get; set; }

        public DateTime Date { get; set; }

        public User User { get; set; }
        // double is ok?
        public double Amount { get; set; }
        // or just Paid?
        public bool IsPaid { get; set; }

    }
}