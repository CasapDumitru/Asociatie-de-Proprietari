using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Backend.DAL
{
    public class DbInitializer : System.Data.Entity.DropCreateDatabaseAlways<LocalDbContext>
    {
        protected override void Seed(LocalDbContext context)
        {
            var users = new List<User>()
            {
                new User()
                {
                    FirstName = "Iuăn",
                    LastName = "Soțul Măriei",
                    Password = "capra",
                    UserName="Ion",
                    Email = "ioan@yahoo.com",
                    UserType = UserTypes.Admin //sefu
                },
                 new User()
                {
                    FirstName = "Măria",
                    LastName = "Soția lui Iuăn",
                    Password = "capra",
                    UserName="Maria",
                    Email = "maria@yahoo.com",
                    UserType = UserTypes.Tenant
                },
            };

            var requirements = new List<Requirement>()
            {
                new Requirement()
                {
                    Name = "MockRequirement",
                    Description = "lalala",
                    User = users[0],
                    Date = DateTime.Now
                }, new Requirement()
                {
                    Name = "MockRequirement",
                    Description = "lalala2",
                    User = users[0],
                    Date = DateTime.Now
                }
                , new Requirement()
                {
                    Name = "MockRequirement",
                    Description = "lalala3",
                    User = users[1],
                    Date = DateTime.Now
                }
            };

            var events = new List<Event>()
            {
                new Event()
                {
                    Title = "M-am nascut",
                    Description = "Copil frumos",
                    Location = "Cluj",
                    Date = DateTime.Now.AddYears(1).AddMonths(1),
                    User = users[1]
                },
                 new Event()
                {
                    Title = "M-am nascut",
                    Description = "Copil frumos",
                    Location = "Cluj",
                    Date = DateTime.Now,
                    User = users[0]
                }

            };

            var smartHomes = new List<SmartHome>()
            {
                new SmartHome()
                {
                    IsActivated = false,
                    Ip = "192.168.1.1",
                    User = users[0]
                }
            };

            var notifiedUsers = new List<NotifiedUser>()
            {
                new NotifiedUser()
                {
                    Date = DateTime.Now,
                    User = users[0],
                    SmartHome = smartHomes[0]
                }
            };

            var announcements = new List<Announcement>()
            {
                new Announcement()
                {
                    Content = "S-o spart țava de gaz",
                    Date = DateTime.Now,
                    Title = "Ioi bai mare",
                    User = users[0]                
                },
                 new Announcement()
                {
                    Content = "S-o luat curentu'",
                    Date = DateTime.Now,
                    Title = "Ioi bai și mai mare",
                    User = users[1]
                }
            };

            var conversations = new List<Conversation>()
            {
                new Conversation()
                {
                    UserOne = users[0],
                    UserTwo = users[1]
                }
            };

            var invoices = new List<Invoice>()
            {
                new Invoice()
                {
                    Amount = 200,
                    IsPaid = false,
                    User = users[0]
                },
                 new Invoice()
                {
                    Amount = 200,
                    IsPaid = true,
                    User = users[1]
                }
            };

            var messages = new List<Message>()
            {
                new Message()
                {
                    Conversation = conversations[0],
                    Text = "Ioi Mărie ce bine arați",
                    Date = DateTime.Now,
                    User = users[0]
                }

            };

            var taxes = new List<Tax>()
            {
                new Tax()
                {
                    Name = "Reparatie lift",
                    Price = 20
                },
                new Tax()
                {
                    Name = "Inlocuire geamuri",
                    Price = 1
                }
            };

            var votes = new List<Vote>()
            {
                new Vote()
                {
                    Date = DateTime.Now,
                    Content = "Sedinta",
                    NumberOfVotes = 0,
                    Status = false,
                    User = users[0]
                },
                new Vote()
                {
                    Date = DateTime.Now.AddDays(7),
                    Content = "Sedinta",
                    NumberOfVotes = 0,
                    Status = false,
                    User = users[0]
                }
            };


            context.Users.AddRange(users);
            context.Requirements.AddRange(requirements);
            context.Events.AddRange(events);
            context.SmartHomes.AddRange(smartHomes);
            context.NotifiedUsers.AddRange(notifiedUsers);
            context.Announcements.AddRange(announcements);
            context.Conversations.AddRange(conversations);
            context.Invoices.AddRange(invoices);
            context.Messages.AddRange(messages);
            context.Taxes.AddRange(taxes);
            context.Votes.AddRange(votes);

            context.SaveChanges();
            base.Seed(context);
        }
    }
}