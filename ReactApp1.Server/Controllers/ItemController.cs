using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Models;

namespace ReactApp1.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemController : ControllerBase
    {
        private static readonly IEnumerable<Item> Items = new[]
        {
            new Item{ Id =1, Title = "The Godfather", ImageId=1, Ranking=0,ItemType=1 },
            new Item{ Id =2, Title = "Highlander", ImageId=2, Ranking=0,ItemType=1 },
            new Item{ Id =3, Title = "Highlander II", ImageId=3, Ranking=0,ItemType=1 },
            new Item{ Id =4, Title = "The Last of the Mohicans", ImageId=4, Ranking=0,ItemType=1 },
            new Item{ Id =5, Title = "Police Academy 6", ImageId=5, Ranking=0,ItemType=1 },
            new Item{ Id =6, Title = "Rear Window", ImageId=6, Ranking=0,ItemType=1 },
            new Item{ Id =7, Title = "Road House", ImageId=7, Ranking=0,ItemType=1 },
            new Item{ Id =8, Title = "The Shawshank Redemption", ImageId=8, Ranking=0,ItemType=1 },
            new Item{ Id =9, Title = "Star Treck IV", ImageId=9, Ranking=0,ItemType=1 },
            new Item{ Id =10, Title = "Superman 4", ImageId=10, Ranking=0,ItemType=1 },
            new Item{ Id = 11, Title = "Abbey Road", ImageId=11, Ranking=0,ItemType=2 },
            new Item{ Id = 12, Title = "Adrenalize", ImageId=12, Ranking=0,ItemType=2 },
            new Item{ Id = 13, Title = "Back in Black", ImageId=13, Ranking=0,ItemType=2 },
            new Item{ Id = 14, Title = "Enjoy the Silence", ImageId=14, Ranking=0,ItemType=2 },
            new Item{ Id = 15, Title = "Parachutes", ImageId=15, Ranking=0,ItemType=2 },
            new Item{ Id = 16, Title = "Ride the Lightning", ImageId=16, Ranking=0,ItemType=2 },
            new Item{ Id = 17, Title = "Rock or Bust", ImageId=17, Ranking=0,ItemType=2 },
            new Item{ Id = 18, Title = "Rust in Peace", ImageId=18, Ranking=0,ItemType=2 },
            new Item{ Id = 19, Title = "St. Anger", ImageId=19, Ranking=0,ItemType=2 },
            new Item{ Id = 20, Title = "The Final Countdown", ImageId=20, Ranking=0,ItemType=2 }

        };

        //[HttpGet()]
        //public Item Get()
        //{
        //    return Items.First();
        //}

        [HttpGet("{itemType:int}")]
        public Item[] Get(int itemType)
        {
            // Add artificial delay to test loading screen functionality
            System.Threading.Thread.Sleep(2000);
            return Items.Where(item => item.ItemType == itemType).ToArray();
        }
    }
}
