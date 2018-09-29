using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;

namespace Backend.Controllers
{
    /// <summary>
    /// Report methods
    /// </summary>
    public class ReportController : ApiController
    {

        private static List<string> files = new List<string>()
        {
            "maintenance_situation",
            "balance_expenses"
        };

        /// <summary>
        /// File donwload test
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Report/TestDownload")]
        public IHttpActionResult Test()
        {
            var result = WrappFileInResponseMessage("D:/Desktop/Facultate/Programare/ProjectPIU/Backend/Backend/Test.pdf");
            var response = ResponseMessage(result);
            return response;
        }

        /// <summary>
        /// Get the MaintenanceSituation for the given month and year.
        /// </summary>
        /// <param name="month"></param>
        /// <param name="year"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Report/MaintenanceSituation/pdf/{month}/{year}")]
        public IHttpActionResult MaintenanceSituationPdf(int month, int year)
        {
            var result = WrappFileInResponseMessage("D:/Desktop/Facultate/Programare/ProjectPIU/Backend/Backend/Test.txt");
            var response = ResponseMessage(result);
            return response;
        }

        /// <summary>
        /// Get the MaintenanceSituation for the given month and year.
        /// </summary>
        /// <param name="month"></param>
        /// <param name="year"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Report/MaintenanceSituation/xls/{month}/{year}")]
        public IHttpActionResult MaintenanceSituationXls(int month, int year)
        {
            var result = WrappFileInResponseMessage("D:/Desktop/Facultate/Programare/ProjectPIU/Backend/Backend/Test.pdf");
            var response = ResponseMessage(result);
            return response;
        }

        /// <summary>
        /// Get the balance file
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Report/Balance/pdf")]
        public IHttpActionResult BalancePdf()
        {
            var result = WrappFileInResponseMessage("D:/Desktop/Facultate/Programare/ProjectPIU/Backend/Backend/Test.pdf");
            var response = ResponseMessage(result);
            return response;
        }

        /// <summary>
        /// Get the balance file
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Report/Balance/xls")]
        public IHttpActionResult BalanceXls()
        {
            var result = WrappFileInResponseMessage("D:/Desktop/Facultate/Programare/ProjectPIU/Backend/Backend/Test.pdf");
            var response = ResponseMessage(result);
            return response;
        }

        private HttpResponseMessage WrappFileInResponseMessage(string pathToFile)
        {
            // the file must be deployed on the IIS server
            var stream = new FileStream(pathToFile, FileMode.Open);

            var result = new HttpResponseMessage(HttpStatusCode.OK)
            {
                Content = new StreamContent(stream)
            };
            result.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment")
            {
                FileName = "Test.txt"
            };
            result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");

            return result;
        }
    }
}
