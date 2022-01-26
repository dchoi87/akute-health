const tags = [
  'assessments',
  'create new',
  'create tags',
  'diagnostic report',
  'doc review',
  'fax',
  'form submission',
  'health maintenance',
];

const Tags = () => {
  return (
    <div className="tasks-tags">
      <div className="tasks-tags__search">
        {/* <label htmlFor="tasks-search" className="visually-hidden">Search Tags</label> */}
        <input type="search" id="tasks-search" placeholder="Search Tags"/>
      </div>
      <div className="tasks-tags__wrapper">
        {
          tags.map((tag, i) => {
            const temp = i < 2;
            return (
              <button key={i} className={"tasks-tags__tag tasks__btn" + (temp ? ' tasks__btn--selected' : '')}>{tag}</button>
            )
          })
        }
      </div>
    </div>
  )
}

export default Tags;