using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Model;
[EnableCors("AllowAllHeaders")]
[Route("api/v1/countries")]

public class CountryController : Controller
{
    private readonly PicturesContext context;
    public CountryController(PicturesContext context){
        this.context= context;
    }
    
    [HttpGet]
    public List<Country> GetAllCountries(int? page, string sort, int length = 4, string dir = "asc")
    {
        IQueryable<Country> query = context.Countries;

        switch(sort)
        {
            case "name":
                if(dir == "asc")
                    query = query.OrderBy(d => d.Name);
                else if (dir == "desc")
                    query = query.OrderByDescending(d => d.Name);
                break;
            
            case "id":
                if(dir == "asc")
                    query = query.OrderBy(d => d.Id);
                else if (dir == "desc")
                    query = query.OrderByDescending(d => d.Id);
                break;
        }


        if(page.HasValue)
        {
            query = query.Skip(page.Value * length);
        }
        query = query.Take(length);

        return query.ToList();
    }

    [Route("{id}")]
    [HttpGet]
    public IActionResult GetCountry(int id)
    {
        var country = context.Countries.Find(id);
        if (country == null)
            return NotFound();
        return Ok(country);
    }

    [HttpPost]
    public IActionResult AddCountry([FromBody]Country newCountry)
    {
        context.Countries.Add(newCountry);
        context.SaveChanges();
        return Created("", newCountry);
    }
    [Route("{id}")]
    [HttpDelete]
    public IActionResult Delete(int id)
    {
        var country = context.Countries.Find(id);
        if(country == null)
            return NotFound();
        context.Countries.Remove(country);
        context.SaveChanges();
        return NoContent();
    }

    [HttpPut]
    public IActionResult UpdateCountry([FromBody] Country UpdateCountry){
        var orgCountry = context.Countries.Find(UpdateCountry.Id);
        if(orgCountry == null)
            return NotFound();
        orgCountry.Name = UpdateCountry.Name;
        context.SaveChanges();
        return Ok(orgCountry);
    }
}