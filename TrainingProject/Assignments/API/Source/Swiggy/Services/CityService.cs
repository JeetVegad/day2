﻿using Swiggy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Swiggy.Services
{
    public interface ICityService : IRepository<City>
    {

    }
    public class CityService : Repository<City>, ICityService
    {
        public CityService(swiggy2447jeetContext swiggy2447) : base(swiggy2447)
        {
        }
    }
}
