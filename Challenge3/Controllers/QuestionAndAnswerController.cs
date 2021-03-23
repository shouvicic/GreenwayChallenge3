using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json;
using Challenge3.Models;
using System.Text;

namespace GreenWayHealthChallenge3.Controllers
{
    [Route("api/home")]
    public class QuestionAndAnswerController : Controller
    {
        private readonly ILogger<QuestionAndAnswerController> _logger;
        private readonly IConfiguration _configuration;
        private readonly string _triviaQuestionAPIURL;

        public QuestionAndAnswerController(ILogger<QuestionAndAnswerController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;

            _triviaQuestionAPIURL = _configuration.GetValue<string>("TriviaQuestionAPIURL");
        }

        [HttpGet]
        [Route("randomquestions")]
        public async Task<IActionResult> Index()
        {
            ApiResponse dsResponse = new ApiResponse();
            dsResponse.Results = new List<Result>();
            //List<QuentionAnswer> questionAndanswerList = new List<QuentionAnswer>();
            try
            {
                using (var httpClient = new HttpClient())
                {
                    using (var response = await httpClient.GetAsync(_triviaQuestionAPIURL))
                    {
                        var apiResponse = await response.Content.ReadAsStringAsync();
                        // QuentionAnswer[] quentionAnswerArray = new JsonConvert.<QuentionAnswer[]>(apiResponse);
                        dsResponse = JsonConvert.DeserializeObject<ApiResponse>(apiResponse);
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Json(dsResponse);
        }




    }
}
