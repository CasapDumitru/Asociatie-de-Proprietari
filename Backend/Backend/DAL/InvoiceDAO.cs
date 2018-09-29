using Backend.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
namespace Backend.DAL
{
    public class InvoiceDAO
    {

        public Invoice GetInvoiceById(int id)
        {
            Invoice theInvoice = null;
            using (var dbContext = new LocalDbContext())
            {
                theInvoice = dbContext
                    .Invoices
                    .Include(invoice => invoice.User) // eagerly loading
                    .FirstOrDefault(invoice => invoice.Id == id);
            }
            return theInvoice;
        }

        public IEnumerable<Invoice> GetUnpaidInvoicesOfUser(User user)
        {
            IEnumerable<Invoice> theInvoices = null;
            using (var dbContext = new LocalDbContext())
            {
                // lazy loading
                //var query = from inv in dbContext.Invoices
                //            where inv.User.Id == user.Id && !inv.IsPaid
                //           select inv;
                //theInvoices = query.AsEnumerable();
                var theInv = dbContext.Invoices
                    .Include(i => i.User)
                    .Where(i => (i.User.Id == user.Id && !i.IsPaid))
                    .ToList();

                theInvoices = theInv
                    .AsEnumerable();

                      
            }
            return theInvoices;
        }

        public IEnumerable<Invoice> GetPaidInvoices()
        {
            IEnumerable<Invoice> theInvoices = null;
            using (var dbContext = new LocalDbContext())
            {
                //var query = from inv in dbContext.Invoices
                //            where inv.IsPaid
                //            select inv;
                //theInvoices = query.AsEnumerable();
                theInvoices = dbContext.Invoices
                    .Include(i => i.User)
                    .Where(i => i.IsPaid)
                    .ToList()
                    .AsEnumerable();
            }
            return theInvoices;
        }

        public IEnumerable<Invoice> GetUnpaidInvoices()
        {
            IEnumerable<Invoice> theInvoices = null;
            using (var dbContext = new LocalDbContext())
            {
                //var query = from inv in dbContext.Invoices
                //            where !inv.IsPaid
                //            select inv;
                //theInvoices = query.AsEnumerable();
                theInvoices = dbContext.Invoices
                    .Include(i => i.User)
                    .Where(i => !i.IsPaid)
                    .ToList()
                    .AsEnumerable();
            }
            return theInvoices;
        }


    }
}