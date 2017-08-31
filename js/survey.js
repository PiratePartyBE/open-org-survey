$(document).ready(function() {
  Survey.Survey.cssType = "bootstrap";

  var surveyJSON = {
    pages: [ { 
        elements: [
          {
            type: "html",
            html: "In organizations that aren't open, transparency is rare. Individuals and teams do not regularly disclose their plans, products, or processes to multiple stakeholders. People affected by decisions are often surprised to learn about those decisions, and decision-makers often withhold data and resources without explanation. Locating and accessing potentially helpful resources can be difficult, in part because individuals and teams neither contribute to nor draw upon a shared repository of knowledge.",
            name: "transparency-description"
          }, {
            type: "radiogroup",
            choices: [ 
              {value:"0",text:"… release project materials for review internally, after they've finished their work"},
              {value:"1",text:"… make project-related and non-sensitive materials accessible to all members of project teams according to clearly defined and shared formats and/or protocols"},
              {value:"2",text:"… make project-related and non-sensitive materials broadly accessible to the organization—and possibly outside the organization as well—according to clearly defined and shared formats and/or protocols"}
            ],
            indent: 1,
            name: "transparency-1",
            title: "In my organization, individuals and teams…"
          }, {
            type: "radiogroup",
            choices: [
              {value:"0",text:"… recognize that leaders are making decisions that affect them but don't see a clear or obvious way of providing input on those decisions"},
              {value:"1",text:"… feel like they know about—and are helping to shape—most (but not all) important decisions as those decisions are unfolding"},
              {value:"2",text:"… feel like they are a part of a shared, standard process for collective decision-making that the organization endorses"}
            ], 
            indent: 1,
            name: "transparency-2",
            title: "In my organization, people…"
          }, {
            type: "radiogroup",
            choices: [
              {value:"0",text:"… become available for review after decisions are finalized"},
              {value:"1",text:"… are available at defined project milestones"},
              {value:"2",text:"… are available for review at the beginning of projects, and are easily and continuously accessible during work processes"}
            ],
            indent: 1,
            name: "transparency-3",
            title: "In my organization, materials that are part of decision-making practices…"
          }, { 
            type: "radiogroup",
            choices: [
              {value:"0",text:"… about successes, but not about failures"},
              {value:"1",text:"… of successes and failures during retrospectives and reviews"},
              {value:"2",text:"… of successes and failures, and frequently engage in difficult conversations during project execution"}
            ],
            indent: 1,
            name: "transparency-4",
            title: "In my organization, individuals and teams are comfortable sharing stories…"
          }, {
            type: "radiogroup",
            choices: [
              {value:"0",text:"… individuals and teams share resources but in disconnected, fragmented, or individualized/siloed systems or repositories"},
              {value:"1",text:"… we sponsor and promote a shared repository for collective knowledge, and some organization members can and do contribute to it"},
              {value:"2",text:"… we sponsor and promote a robust and easily-accessible knowledge commons, and all teams and organization members make generous and unrestricted use of it"}
            ],
            indent: 1,
            name: "transparency-5",
            title: " In my organization, …"
          }, {
            type: "radiogroup",
            choices: [
              {value:"0",text:"… release data and resources to others, but there is no commonly expressed or shared understanding of the criteria used to determine whether information is sensitive or not, and little context for understanding how decisions are made"},
              {value:"1",text:"… withhold sensitive data and resources, but they are somewhat unclear about what they're not sharing and provide limited details, context, and scope"},
              {value:"2",text:"… who must withhold sensitive data and resources are clear about what they're not sharing, and others understand why those materials are not available to them"}
            ],
            indent: 1,
            name: "transparency-6",
            title: "In my organization, individuals and teams…"
          }
        ],
        name: "transparency",
        title: "Transparency"
      }, {
        elements: [
          {
            type: "html",
            html: "In organizations that aren't open, people lack established channels for providing feedback or learning about projects and activities. Leaders and project teams do not actively solicit diverse perspectives in their work or think broadly about involving stakeholders of different backgrounds. People do not expect decision making to be an inclusive activity, so the organization does not actively promote a process for collective or collaborative decision-making. Instead, leaders make decisions without much input from others, and people are accustomed to receiving direction without any opportunity to provide input.",
            name: "inclusivity-description"
          }, {
            type: "radiogroup",
            choices: [
              {value:"0",text:"… is in the process of establishing internal guidelines and channels for encouraging diverse points of view about company/departmental decisions, so that anyone belonging to the organization can use them"},
              {value:"1",text:"… has already established internal guidelines and channels for encouraging and soliciting diverse points of view about company/departmental decisions, so that anyone belonging to the organization can use them; and expressly solicits such participation from parties that may be reluctant to do so"},
              {value:"2",text:"… has established internal guidelines and channels for encouraging and soliciting diverse points of view on team or decisions, has aligned these with people's preferences for providing feedback, and has established a cross-functional team of organizational members to help maintain them"}
            ],
            indent: 1,
            name: "inclusivity-1",
            title: "My organization…"
          }, {
            type: "radiogroup",
            choices: [
              {value:"0",text:"… officially sanctioned platforms, but those materials are the result of collaboration and agreement among a limited number of stakeholders"},
              {value:"1",text:"… officially sanctioned platforms made accessible by default"},
              {value:"2",text:"… collaborative platforms that come with clear usage guidelines, and receive encouragement in using open technical standards in their work"}
            ],
            indent: 1,
            name: "inclusivity-2",
            title: "Members of my organization share decision-making materials on…"
          }, {
            type: "radiogroup",
            choices: [
              {value:"0",text:"… some, but not all, people are open to receiving feedback and creating an environment where people feel safe providing it"},
              {value:"1",text:"… most people are open to receiving feedback and creating an environment where others feel safe providing it, and can demonstrate that protocols and procedures for participating in organization-wide discussions are collaborative"},
              {value:"2",text:"… most people are open to receiving feedback and creating an environment where others feel safe providing it, and open feedback processes themselves to start discussions"}
            ],
            indent: 1,
            name: "inclusivity-3",
            title: "In my organization, …"
          }, {
            type: "radiogroup",
            choices: [
              {value:"0",text:"… we maintain at least one clear and direct channel for organization members to share opinions constructively on some matters relevant to their work or about which they feel passionate about, but there is passivity about understanding whether all members feel empowered and enabled to do so"},
              {value:"1",text:"… members have the ability (through established channels and processes) to share opinions constructively on any matter relevant to their work or about which they feel passionate about, but whether all members feel empowered and enabled to do so is unclear. When these opinions are shared, people consistently demonstrate willingness to address and respond to feedback they've received, typically in a way that entire teams can see"},
              {value:"2",text:"… members feel empowered and enabled to share opinions constructively on any matter relevant to their work or about which they feel passionate"}
            ],
            indent: 1,
            name: "inclusivity-4",
            title: "In my organization, …"
          }, {
            type: "radiogroup",
            choices: [
              {value:"0",text:"… via private channels or discussions"},
              {value:"1",text:"… openly via multiple channels and methods for feedback; active members use those channels themselves, and openly encourage others to use them"},
              {value:"2",text:"… openly via multiple channels and methods for feedback; active members use those channels themselves, openly encourage others to use them, and maintain team-facing or public-facing records of the feedback they've received and/or the actions they've taken to address this feedback"}
            ],
            indent: 1,
            name: "inclusivity-5",
            title: "Members of my organization share materials…"
          }, {
            type: "radiogroup",
            choices: [
              {value:"0",text:"… encourages active members to be conscious of voices not present in dialogue and to actively seek them out for inclusion"},
              {value:"1",text:"… provides specific resources (training programs, access to content, etc.) to help active members to hone their strategies for forming inclusive teams"},
              {value:"2",text:"… provides specific resources (training programs, access to content, etc.) to help both active members and other team members hone their strategies for forming inclusive teams"}
            ],
            indent: 1,
            name: "inclusivity-6",
            title: "My organization…"
          }
        ],
        name: "inclusivity",
        title: "Inclusivity"
      }, {
        elements: [
          {
            type: "html",
            html: "In organizations that aren't open, responding to environmental conditions is difficult because centralized systems inhibit responsiveness and flexibility. Decision-making cannot keep pace with complex and shifting contexts. Information flows in predefined, linear, and often hierarchical directions, and power is centralized. As a result, people have difficulty sharing materials and providing valuable responses that could rapidly improve projects. They lack opportunities for empowerment, continuous learning, and the ability to engage in the kind of collective problem solving that produces innovative, nuanced solutions. People are afraid to fail because the organization discourages experimentation.",
            name: "adaptability-description"
          }, {
            type: "radiogroup",
            choices: [
              {value:"0",text:"… share materials, but typically in a one-way, \"read only\" fashion"},
              {value:"1",text:"… share materials via methods that allow other members to modify those materials"},
              {value:"2",text:"… can share materials with external parties via methods that permit modification"}
            ],
            indent: 1,
            name: "adaptability-1",
            title: "Members of my organization…"
          }, {
            type: "radiogroup",
            choices: [
              {value:"0",text:"… but only from internal stakeholders"},
              {value:"1",text:"… and promotes an obvious and accessible method for collecting it from both internal stakeholders and external parties"},
              {value:"2",text:"… promotes an obvious and accessible method for collecting it from both internal stakeholders and external parties, and expressly allocates resources for managing and acting on it"}
            ],
            indent:1,
            name:"adaptability-2",
            title:"My organization routinely solicits feedback…"
          }, {
            type:"radiogroup",
            choices: [
              {value:"0",text:"… provides opportunities for its members to learn about other aspects of the organization"},
              {value:"1",text:"… provides opportunities for its members to learn about other aspects of the organization, and fosters continuous learning by offering programs and events"},
              {value:"2",text:"… not only provides opportunities for its members to learn about other aspects of the organization, but also offers clear and structured processes and/or platforms for facilitating participation"}
            ],
            indent:1,
            name:"adaptability-3",
            title:"My organization…"
          }, {
            type:"radiogroup",
            choices: [
              {value:"0",text:"… feel like they somewhat understand the organization's goals, but might still have questions and are unsure where to find answers"},
              {value:"1",text:"… regularly discuss their roles in the organization's goals and strategies, as well as their progress on projects, key metrics, and performance indicators"},
              {value:"2",text:"… regularly discuss their roles in the organization's goals and strategies—and their progress on projects, key metrics and performance indicators—while feeling comfortable addressing challenges without managerial oversight"}
            ],
            indent:1,
            name:"adaptability-4",
            title:"Members of my organization…"
          }, {
            type:"radiogroup",
            choices: [
              {value:"0",text:"… encourages participants to solve problems by working together, but doesn't provide clear frameworks or guidance to ensure that they can do so effectively"},
              {value:"1",text:"… provides structured processes, clear frameworks and guidance for collective decision-making and problem-solving, and members use it regularly"},
              {value:"2",text:"… 's decision-making and problem-solving frameworks and processes are collectively modifiable, and members feel comfortable adjusting their behaviours in response to changing conditions"}
            ],
            indent:1,
            name:"adaptability-5",
            title:"My organization…"
          }, {
            type:"radiogroup",
            choices: [
              {value:"0",text:"… failure is a frequent topic of discussion among team members, but discussions of failure often involve blame"},
              {value:"1",text:"… members understand that failure is an acceptable outcome of experimentation, and they create processes to regularly discuss failure and continuously improve"},
              {value:"2",text:"… active members cultivate a spirit of experimentation by spotlighting productive failures across the organization, and talk about their own failures as learning experiences"}
            ],
            indent:1,
            name:"adaptability-6",
            title:"In my organization…"
          }
        ],
        name:"adaptability",
        title:"Adaptability"
      }, {
        elements: [
          {
            type:"html",
            html:"In organizations that aren't open, people tend to share the work they do only when asked for it. Conversations and joint efforts across departmental boundaries are difficult, even discouraged. As a result, projects move more slowly than they otherwise could. Work gets duplicated unnecessarily across teams working toward similar goals, and project outcomes do not reflect the best possible results. People are not aware of the ways that work from other groups can enhance their own efforts, and they tend to let predetermined descriptions of their responsibilities dictate the work they do.",
            name:"collaboration-description"
          }, {
            type:"radiogroup",
            choices: [
              {value:"0",text:"… after initiating or completing projects"},
              {value:"1",text:"… by initiating projects in group settings, in the earliest possible stages"},
              {value:"2",text:"… by initiating projects in group settings, effectively connecting with additional project groups to form cross-functional teams"}
            ],
            indent:1,
            name:"collaboration-1",
            title:"Members of my organization share work…"
          }, {
            type:"radiogroup",
            choices: [
              {value:"0",text:"… exist, but team roles are often unclear and governance structures are vague"},
              {value:"1",text:"… are commonplace, and teams post their roles and goals publicly"},
              {value:"2",text:"… are commonplace and make their activities known broadly to the organization; in turn, the organization promotes best practices for working together"}
            ],
            indent:1,
            name:"collaboration-2",
            title:"In my organization, cross-functional teams…"
          }, {
            type:"radiogroup",
            choices: [
              {value:"0",text:"… remain inside teams, and teams share these outcomes only upon request"},
              {value:"1",text:"… are available to the entire organization, and teams make these outcomes available by default"},
              {value:"2",text:"… are available across the organization and externally, and teams make these outcomes available by default"}
            ],
            indent:1,
            name:"collaboration-3",
            title:"In my organization, outcomes of collaborative efforts…"
          }, {
            type:"radiogroup",
            choices: [
              {value:"0",text:"… tend to be static in terms of membership and skill sets"},
              {value:"1",text:"… habitually seek diverse sets of viewpoints, members, experiences, and skills"},
              {value:"2",text:"… habitually seek diverse sets of viewpoints, members, experiences, and skills, and leverage this diversity effectively"}
            ],
            indent:1,
            name:"collaboration-4",
            title:"In my organization, working groups and cross-functional teams…"
          }, {
            type:"radiogroup",
            choices: [
              {value:"0",text:"… infrequently revisit the outcomes of their collaborations"},
              {value:"1",text:"… routinely discuss, revisit and debate the outcomes of their collaborative efforts"},
              {value:"2",text:"… routinely discuss, revisit and debate the outcomes of their collaborative efforts, and share their learnings outside the organization"}
            ],
            indent:1,
            name:"collaboration-5",
            title:"In my organization, teams…"
          }, {
            type:"radiogroup",
            choices: [
              {value:"0",text:"… and teams collaborate but frequently say it's \"too difficult\" or \"more trouble than it's worth\""},
              {value:"1",text:"… and teams actively seek opportunities to collaborate as a built-in or natural part of their planning"},
              {value:"2",text:"… collaborate both internally and externally in ways that benefit all involved"}
            ],
            indent:1,
            name:"collaboration-6",
            title:"Members of my organization…"
          }
        ],
        name:"collaboration",
        title:"Collaboration"
      }, {
        elements: [
        {
          type:"html",
          html:"In organizations that aren't open, people tend to act primarily in the service of individual and team goals. Because people don't often share their work and may use different languages to interpret the organization's mission, teams often have difficulty aligning their work with a common purpose. As a result, duplicate work becomes common and stakeholder buy-in decreases (because people can't always determine who those stakeholders are). Consequently, people may begin to feel disassociated with the organization as a whole, leading to attrition.",
          name:"community-description"
        }, {
          type:"radiogroup",
          choices: [
            {value:"0",text:"… some members unite to define values and principles, but are not clearly supported when they do"},
            {value:"1",text:"… members collectively document shared visions and agreements like mission statements and codes of conduct, make them easily accessible, and reference them often"},
            {value:"2",text:"… shared values and principles inform decision-making, conflict resolution, and assessment processes among members of the organization, who reference these values and principles consistently in both verbal and written formats"}
          ],
          indent:1,
          name:"community-1",
          title:"In my organization, …"
        }, {
          type:"radiogroup",
          choices: [
            {value:"0",text:"… members feel comfortable sharing their thoughts and opinions without fear of retribution, but only in familiar domains"},
            {value:"1",text:"… members feel comfortable sharing their thoughts and opinions without fear of retribution; onboarding materials and orientation rituals provide adequate context for helping new members understand how the organization will benefit from their contributions"},
            {value:"2",text:"… we are proactive in telling members that it benefits from their contributions; as such, members demonstrate shared consciousness and empowered execution, and feel a sense of agency and responsibility to the community"}
          ],
          indent:1,
          name:"community-2",
          title:"In my organization, …"
        }, {
          type:"radiogroup",
          choices: [
            {value:"0",text:"… people understand that the best ideas win, and leadership responsibilities accrue to people with histories of contribution and commitment"},
            {value:"1",text:"… active members demonstrate dedication to the organization's shared values, and they model the behavior the organization has determined admirable when they help resolve conflicts or other issues"},
            {value:"2",text:"… active members understand that they grow by helping others grow, and they mentor junior members of the organization"}
          ],
          indent:1,
          name:"community-3",
          title:"In my organization, …"
        }, {
          type:"radiogroup",
          choices: [
            {value:"0",text:"… is embryonic or partially formed, but not all organization members are fluent and gaining fluency requires individual effort"},
            {value:"1",text:"… is embryonic or partially formed, and members make efforts to explain/document jargon, acronyms, and inside jokes to each other—especially new members"},
            {value:"2",text:"… exists, such that members are not only fluent but can also articulate the organization's identity, formulate stories that attract new members, grow, and provide mentorship"}
          ],
          indent:1,
          name:"community-4",
          title:"A common language for my organization…"
        }
      ],
      name:"community",
      title:"Community"
    } ]
  }
  
  function sendDataToServer(survey) {
    var scores = computeScores(survey.data);
    
    data = [ jQuery.map(scores, function(score, page) {
      return { 'axis' : page, 'value' : score };
    }) ];
    
    console.log(data)
    
    var margin = {top: 100, right: 100, bottom: 100, left: 100},
        width  = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
        height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
    RadarChart("#radarchart", data, { 
      maxValue: 1,
      levels: 5,
//       roundStrokes: true,
      margin: margin,
      w: width,
      h: height
    });
  }

  var survey = new Survey.Model(surveyJSON);
  $("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
  });
  
  function computeScores(data) {
    var scores = {};
    var counts = {};
    jQuery.each(surveyJSON.pages, function(_, page) {
      scores[page.name] = 0;
      counts[page.name] = 0;
    });
    
    jQuery.each(data, function(field, value) {
      page = field.slice(0, -2);
      
      scores[page] += parseInt(value);
      counts[page] ++;
    });
    
    jQuery.each(scores, function(page, score) {
      if(score != 0)
        scores[page] = score / (2.0 * counts[page]);
    })
    
    return scores;
  }
});
