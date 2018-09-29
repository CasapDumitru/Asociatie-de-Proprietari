using Backend.DAL;
using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;

namespace Backend.Controllers
{
    /// <summary>
    /// Invoice
    /// </summary>
    public class InvoiceController : ApiController
    {
        private InvoiceDAO repo = new InvoiceDAO();

        // GET: api/Invoice
        /// <summary>
        /// Get all invoices.
        /// </summary>
        /// <returns>All invoices</returns>
        public IEnumerable<Invoice> Get()
        {
            return DataAccessHelper<Invoice>.GetAllEntities();
        }

        // GET: api/Invoice/5
        /// <summary>
        /// Get an invoice by id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns>The invoice with the given id.</returns>
        public Invoice Get(int id)
        {
            return repo.GetInvoiceById(id);
        }


        // POST: api/Invoice
        /// <summary>
        /// Insert new invoice in DB.
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        public Invoice Post([FromBody]Invoice value)
        {
            return DataAccessHelper<Invoice>.AddEntity(value);
        }

        // PUT: api/Invoice/5
        /// <summary>
        /// Update the invoice. 
        /// </summary>
        /// <param name="id"></param>
        /// <param name="value"></param>
        public void Put(int id, [FromBody]Invoice value)
        {
            var oldEntity = repo.GetInvoiceById(id);
            DataAccessHelper<Invoice>.UpdateEntity(oldEntity.Id, value);
        }

        // DELETE: api/Invoice/5
        /// <summary>
        /// Delete the invoice with the given id.
        /// </summary>
        /// <param name="id"></param>
        public void Delete(int id)
        {
            var invoice = repo.GetInvoiceById(id);
            if(invoice != null)
                DataAccessHelper<Invoice>.RemoveEntity(invoice);  
        }

        // GET: api/Invoice/GetPaid
        /// <summary>
        /// Get all the paid invoices.
        /// </summary>
        /// <returns></returns>
        [Route("api/Invoice/GetPaid")]
        public IEnumerable<Invoice> GetPaidInvoices()
        {
            return repo.GetPaidInvoices();
        }

        // GET: api/Invoice/GetUnpaid
        /// <summary>
        /// Get all the unpaid invoices.
        /// </summary>
        /// <returns></returns>
        [Route("api/Invoice/GetUnpaid")]
        public IEnumerable<Invoice> GetUnpaidInvoices()
        {
            return repo.GetUnpaidInvoices();
        }


        // GET: api/Invoice/GetUnpaid/user
        /// <summary>
        /// Get all the unpaid invoices for provided user
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [Route("api/Invoice/GetUnpaidUser")]
        public IEnumerable<Invoice> GetUnpaidInvoices([FromUri]User user)
        {
            return repo.GetUnpaidInvoicesOfUser(user);
        }
    }
}
