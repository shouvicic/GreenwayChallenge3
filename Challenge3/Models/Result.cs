using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Challenge3.Models
{
    public class Result
    {
        [JsonProperty("category")]
        public string Category { get; set; }
        [JsonProperty("type")]
        public string Type { get; set; }
        [JsonProperty("difficulty")]
        public string Difficulty { get; set; }
        [JsonProperty("question")]
        public string Question { get; set; }
        [JsonProperty("correct_answer")]
        public string Correct_answer { get; set; }
        [JsonProperty("incorrect_answers")]
        public List<string> Incorrect_answers { get; set; }


    }

    public class ApiResponse
    {
        public string Response_Code { get; set; }
        public List<Result> Results { get; set; }
    }
}
