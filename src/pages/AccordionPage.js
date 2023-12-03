import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id:'hvbk',
      label:'Can i use React on a project?',
      content:'You can use React on any project.You can use React on any project.You can use React on any project.'
    },
    {
      id:'r55erf',
      label:'Can i use JS on a project?',
      content:'You can use JS on any project.You can use JS on any project.You can use JS on any project.'
    },
    {
      id:'44euy',
      label:'Can i use CSS on a project?',
      content:'You can use CSS on any project.You can use CSS on any project.You can use CSS on any project.'
    },
  ]

  return <Accordion items={items} />;
}

export default AccordionPage;
