import { useEffect, useState } from "react"

const Filter = ({ activeFilter, setActiveFilter, setFiltered, all, filtered, tempData }) => {
  // const links = [
  //   { 'link': "All", "category": "all" },
  //   { 'link': "Logo", "category": "logo" },
  //   { 'link': "Business Card", "category": "bcard" },
  //   { 'link': "Brochure", "category": "broc" },
  //   { 'link': "Branding/Guideline", "category": "brand" },
  //   { 'link': "PPT", "category": "ppt" },
  //   { 'link': "Flyer", "category": "fly" },
  //   { 'link': "Infographics", "category": "infograp" },
  //   { 'link': "Label", "category": "label" },
  //   { 'link': "Web", "category": "web" },
  //   { 'link': "Book Cover", "category": "book" }
  // ];



  const links = tempData;


  const [active, setActive] = useState(null);
  useEffect(() => {
    if (activeFilter === 0) {
      setFiltered(all)
      return
    }
    const filtered = all.filter(items => {
      if (activeFilter === "all") {
        return all
      }
      else {
        return items.category === activeFilter
      }
    });
    setFiltered(filtered);
  }, [])

  const handleFilter = ({ link }) => {
    setActive(link);
    setActiveFilter(link);

    const filtered = all.filter(items => {
      if (activeFilter === "all") {
        return all
      }
      else {
        return items.category === link
      }
    });
    setFiltered(filtered);
  }


  return (
    <>
      <div className="filters">
        <ul id="filters" className="filter-tabs my-4 filter-btns">
          {links.map((link) => {
            return <li onClick={() => handleFilter(link)}>
              <span class={`filter ${active === link.link && 'active'}`}>
                {link.link}
              </span>
            </li>
          })}
        </ul>
      </div>
    </>
  )
}

export default Filter