const quizData = [
    {
        id: "q1",
        question: "Universal Containers wants to back up all of the data and attachments in its Salesforce org once month. Which approach should a developer use to meet this requirement?",
        options: [
            { letter: "A", text: "Use the Data Loader command line." },
            { letter: "B", text: "Create a Schedulable Apex class." },
            { letter: "C", text: "Schedule a report." },
            { letter: "D", text: "Define a Data Export scheduled job." }
        ],
        answer: "D"
    },
    {
        id: "q2",
        question: "Cloud Kicks Fitness, an ISV Salesforce partner, is developing a managed package application. One of the application modules allows the user to calculate body fat using the Apex class, BodyFat, and its method, calculateBodyFat(). The product owner wants to ensure this method is accessible by the consumer of the application when developing customizations outside the ISV's package namespace.\nWhich approach should a developer take to ensure calculateBodyFat() is accessible outside the package namespace?",
        options: [
            { letter: "A", text: "Declare the class and method using the public access modifier." },
            { letter: "B", text: "Declare the class as global and use the public access modifier on the method." },
            { letter: "C", text: "Declare the class as public and use the global access modifier on the method." },
            { letter: "D", text: "Declare the class and method using the global access modifier." }
        ],
        answer: "D"
    },
    {
        id: "q3",
        question: "As part of a data cleanup strategy, AW Computing wants to proactively delete associated opportunity records when the related Account is deleted. Which automation tool should be used to meet this business requirement?",
        options: [
            { letter: "A", text: "Workflow Rules" },
            { letter: "B", text: "Scheduled job" },
            { letter: "C", text: "Record-Triggered Flow" },
            { letter: "D", text: "Process Builder" }
        ],
        answer: "C"
    },
    {
        id: "q4",
        question: "What should be used to create scratch orgs?",
        options: [
            { letter: "A", text: "Developer Console" },
            { letter: "B", text: "Salesforce CLI" },
            { letter: "C", text: "Workbench" },
            { letter: "D", text: "Sandbox refresh" }
        ],
        answer: "B"
    },
    {
        id: "q5",
        question: "Which salesforce org has a complete duplicate copy of the production org including data and configuration?",
        options: [
            { letter: "A", text: "Developer Pro Sandbox" },
            { letter: "B", text: "Partial Copy Sandbox" },
            { letter: "C", text: "Production" },
            { letter: "D", text: "Full Sandbox" }
        ],
        answer: "D"
    },
    {
        id: "q6",
        question: "A Salesforce Administrator is creating a record-triggered flow. When certain criteria are met, the flow must call an Apex method to execute complex validation involving several types of objects. When creating the Apex method, which annotation should a developer use to ensure the method. Can be used within the flow?",
        options: [
            { letter: "A", text: "@future" },
            { letter: "B", text: "@RemoteAction" },
            { letter: "C", text: "@InvocableMethod" },
            { letter: "D", text: "@AuraEnaled" }
        ],
        answer: "C"
    },
    {
        id: "q7",
        question: "When a user edits the Postal Code on an Account, a custom Account text field named ''Timezone'' must be updated based on the values in a postalCodeToTimezone_c custom object. What should be built to implement this feature?",
        options: [
            { letter: "A", text: "Account custom trigger" },
            { letter: "B", text: "Account approval process" },
            { letter: "C", text: "Account assignment rule" },
            { letter: "D", text: "Account workflow rule" }
        ],
        answer: "A"
    },
    {
        id: "q8",
        question: "The values 'High', 'Medium', and 'Low' are Identified as common values for multiple picklist across different object. What is an approach a developer can take to streamline maintenance of the picklist and their values, while also restricting the values to the ones mentioned above?",
        options: [
            { letter: "A", text: "Create the Picklist on each object and use a Global Picklist Value Set containing the Values." },
            { letter: "B", text: "Create the Picklist on each object as a required field and select 'Display values alphabeticaly, not in the order entered'." },
            { letter: "C", text: " Create the Picklist on each object and select 'Restrict picklist to the values defined in the value set'." },
            { letter: "D", text: "Create the Picklist on each and add a validation rule to ensure data integrity." }
        ],
        answer: "A"
    },
    {
        id: "q9",
        question: "A developer writes a trigger on the Account object on the before update event that increments a count field. A workflow rule also increments the count field every time that an Account is created or updated. The field update in the workflow rule is configured to not re-evaluate workflow rules. What is the value of the count field if an Account is inserted with an initial value of zero, assuming no other automation logic is implemented on the Account?",
        options: [
            { letter: "A", text: "1" },
            { letter: "B", text: "3" },
            { letter: "C", text: "4" },
            { letter: "D", text: "2" }
        ],
        answer: "D"
    },
    {
        id: "q10",
        question: "Which action causes a before trigger to fire by default for Accounts?",
        options: [
            { letter: "A", text: "Renaming or replacing picklist" },
            { letter: "B", text: "Importing data using the Data Loader and the Bulk API" },
            { letter: "C", text: "Converting Leads to Contact accounts" },
            { letter: "D", text: "Updating addresses using the Mass Address update tool" }
        ],
        answer: "B"
    },
    {
        id: "q11",
        question: "A developer must provide custom user interfaces when users edit a Contact in either Salesforce Classic or Lightning Experience. What should the developer use to override the Contact's Edit button and provide this functionality?",
        options: [
            { letter: "A", text: "A Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience" },
            { letter: "B", text: "A Lightning component in 5alesforce Classic and a Lightning component in lightning Experience" },
            { letter: "C", text: "A Visualforce page in Salesforce Classic and a Lightning page in Lightning Experience" },
            { letter: "D", text: "A Lightning page in Salesforce Classic and a Visualforce page in Lightning Experience" }
        ],
        answer: "A"
    },
    {
        id: "q12",
        question: "AW Computing tracks order information in custom objects called order__c and order_Line_ c- Currently, all shipping information is stored in the order__c object. The company wants to expand Its order application to support split shipments so that any number of order_Line__c records on a single order__c can be shipped to different locations. What should a developer add to fulfill this requirement?",
        options: [
            { letter: "A", text: "Order_shipment_Group_c object and master-detail field on order_Line_c" },
            { letter: "B", text: "Order_shipment_Group_c object and master-detail field on order_c" },
            { letter: "C", text: "Order_shipment_Group_c object and master-detail field to order_c and Order Line_c" },
            { letter: "D", text: "Order_shipment_Group_c object and master-detail field on order_shipment_Group_c" }
        ],
        answer: "C"
    },
    {
        id: "q13",
        question: "What should a developer use to obtain the Id and Name of all the Leads. Accounts, and Contacts that hove the company name 'Universal Containers'?",
        options: [
            { letter: "A", text: "FIND 'Universal Containers' IN Name Fields RETURNING lead(id, name), accounted, name), contacted, name)" },
            { letter: "B", text: "FIND Universal Containers' IN CompanyName Fietds RETURNING lead{ld. name), accounted, name), contacted, name)" },
            { letter: "C", text: "SELECT lead(id, name). accountOd, name), contacted, name) FROM Lead, Account, Contact WHERE Name = 'universal Containers'" },
            { letter: "D", text: "SELECT Lead.id. Lead.Name, Account.Id, AccountName, Contacted, Contact.Name FROM Lead, Account, Contact WHERE CompanvName * Universal Containers'" }
        ],
        answer: "A"
    },
    {
        id: "q14",
        question: "Which aspect of Apex programming is limited due to multitenancy?",
        options: [
            { letter: "A", text: "The number of active Apex classes" },
            { letter: "B", text: "The number of methods in an Apex Class" },
            { letter: "C", text: "The number of records processed in a loop" },
            { letter: "D", text: "The number of records returned from database queries" }
        ],
        answer: "D"
    },
    {
        id: "q15",
        question: "Since Aura application events follow the traditional publish-subscribe model, which method is used to fire an event?",
        options: [
            { letter: "A", text: "emit()" },
            { letter: "B", text: "fireEvent()" },
            { letter: "C", text: "fire()" },
            { letter: "D", text: "registerEvent()" }
        ],
        answer: "C"
    },
    {
        id: "q16",
        question: "A developer needs to have records with specific field values in order to test a new Apex class. What should the developer do to ensure the data is available to the test?",
        options: [
            { letter: "A", text: "Use Anonymous Apex to create the required data." },
            { letter: "B", text: "Use SOQL to query the org for the required data." },
            { letter: "C", text: "Use Test.loadDataO < > and reference a CSV file in a static resource." },
            { letter: "D", text: "Use Test.loadDataO and reference a JSON file in Documents." }
        ],
        answer: "C"
    },
    {
        id: "q17",
        question: "What should a developer do to check the code coverage of a class after running all tests?",
        options: [
            { letter: "A", text: "View the code coverage percentage or the class using the Overalll code Coverage panel in the Developer Console Test tab." },
            { letter: "B", text: "Select and run the class on the Apex Test Execution page in the Developer Console." },
            { letter: "C", text: "View the Class test Percentage tab on the Apex Class list view in Salesforce Setup." },
            { letter: "D", text: "View the Code Coverage column in the list on the Apex Classes page." }
        ],
        answer: "A"
    },
    {
        id: "q18",
        question: "Universal Containers has a Visualforce page that displays a table of every Container_c. being ....... Is falling with a view state limit because some of the customers rent over 10,000 containers. What should a developer change about the Visualforce page to help with the page load errors?",
        options: [
            { letter: "A", text: "Implement pagination with an OffsetController." },
            { letter: "B", text: "Use JavaScript remoting with SOQL Offset." },
            { letter: "C", text: "Use Lazy loading and a transient List variable." },
            { letter: "D", text: "Implement pagination with a StandardSetController" }
        ],
        answer: "D"
    },
    {
        id: "q19",
        question: "A developer Is Integrating with a legacy on-premise SQL database. What should the developer use to ensure the data being Integrated is matched to the right records in Salesforce?",
        options: [
            { letter: "A", text: "External Object" },
            { letter: "B", text: "External ID field" },
            { letter: "C", text: "Lookup field" },
            { letter: "D", text: "Formula field" }
        ],
        answer: "B"
    },
    {
        id: "q20",
        question: "A developer is creating a Lightning web component to showa list of sales records. The Sales Representative user should be able to see the commission field on each record. The Sales Assistant user should be able to see all fields on the record except the commission field. How should this be enforced so that the component works for both users without showing any errors?",
        options: [
            { letter: "A", text: "Use Security. stripInaccessible to remove fields inaccessible to the current user." },
            { letter: "B", text: "Use Lightning Data Service to get the collection of sales records." },
            { letter: "C", text: "Use WITH SECURITY_ENFORCED in the SOQL that fetches the data for the component." },
            { letter: "D", text: " Use Lightning Locker Service to enforce sharing rules and field-level security." }
        ],
        answer: "A"
    },
    {
        id: "q21",
        question: "Which scenario is valid for execution by unit tests?",
        options: [
            { letter: "A", text: "Generate a Visualforce PDF with geccontentAsPDF ()." },
            { letter: "B", text: "Load data from a remote site with a callout." },
            { letter: "C", text: "Set the created date of a record using a system method." },
            { letter: "D", text: "Execute anonymous Apex as a different user." }
        ],
        answer: "C"
    },
    {
        id: "q22",
        question: "Universal Containers stores the availability date on each Line Item of an Order and Orders are only shipped when all of the Line Items are available. Which method should be used to calculate the estimated ship date for an Order?",
        options: [
            { letter: "A", text: "Use a LATEST formula on each of the latest availability date fields." },
            { letter: "B", text: "Use a CEILING formula on each of the Latest availability date fields." },
            { letter: "C", text: "Use a DAYS formula on each of the availability date fields and a COUNT Roll-Up Summary field on the Order." },
            { letter: "D", text: "Use a Max Roll-Up Summary field on the Latest availability date fields." }
        ],
        answer: "D"
    },
    {
        id: "q23",
        question: "Which statement describes the execution order when trigger are associated to the same object and event?",
        options: [
            { letter: "A", text: "Triggers are executed in the order they are modified" },
            { letter: "B", text: "Trigger execution order cannot be guaranteed." },
            { letter: "C", text: "Triggers are executed in the order they are created." },
            { letter: "D", text: "Triggers are executed alphabetically by trigger name." }
        ],
        answer: "B"
    },
    {
        id: "q24",
        question: "The Job_Application__c custom object has a field that is a Master-Detail relationship to the Contact object, where the Contact object is the Master. As part of a feature implementation, a developer needs to retrieve a list containing all Contact records where the related Account Industry is 'Technology' while also retrieving the contact's Job_Application__c records. Based on the object's relationships, what is the most efficient statement to retrieve the list of contacts?",
        options: [
            { letter: "A", text: "[SELECT Id, (SELECT Id FROM Job_Applications_r) FROM Contact WHERE Account.Industry = 'Technology'];" },
            { letter: "B", text: "[SELECT Id, (SELECT Id FROM Job_Applications_c) FROM Contact WHERE Accounts.Industry = 'Technology'];" },
            { letter: "C", text: "[SELECT Id, (SELECT Id FROM Job_Application_c) FROM Contact WHERE Account.Industry = 'Technology'];" },
            { letter: "D", text: "[SELECT Id, (SELECT Id FROM Job_Applications_r) FROM Contact WHERE Accounts.Industry = 'Technology'];" }
        ],
        answer: "A"
    },
    {
        id: "q25",
        question: "A developer has the following requirements: * Calculate the total amount on an Order. * Calculate the line amount for each Line Item based on quantity selected and price. * Move Line Items to a different Order if a Line Item is not in stock. Which relationship implementation supports these requirements on its own?",
        options: [
            { letter: "A", text: "Order has a re-parentable lookup field to Line Item." },
            { letter: "B", text: "Line Item has a re-parentable master-detail field to Order." },
            { letter: "C", text: "Order has a re-parentable master-detail field to Line Item." },
            { letter: "D", text: "Line Item has a re-parentable lookup field to Order." }
        ],
        answer: "B"
    },
    {
        id: "q26",
        question: "A developer is writing tests for a class and needs to insert records to validate functionality. Which annotation method should be used to create record for every method in the test class?",
        options: [
            { letter: "A", text: "@isTest (SeeAllData-true)" },
            { letter: "B", text: "@TestSetup" },
            { letter: "C", text: "@StartTest" },
            { letter: "D", text: "@FreTest" }
        ],
        answer: "B"
    },
    {
        id: "q27",
        question: "An org has an existing flow that creates an Opportunity with an Update Records element. A developer must update the flow to aiso create a 'Contact and store the created Contact's 1D on the Opportunity. Which update must the developer make in the flow?",
        options: [
            { letter: "A", text: "Add a new Update Records element." },
            { letter: "B", text: "Add a new Get Records element." },
            { letter: "C", text: "Add a new Roll back Records element" },
            { letter: "D", text: "Add a new Create Records element." }
        ],
        answer: "D"
    },
    {
        id: "q28",
        question: "Universal Container is building a recruiting app with an Applicant object that stores information about an individual person that represents a job. Each application may apply for more than one job. What should a developer implement to represent that an applicant has applied for a job?",
        options: [
            { letter: "A", text: "Lookup field from Applicant to Job" },
            { letter: "B", text: "Junction object between Applicant and Job" },
            { letter: "C", text: "Master-detail field from Applicant to Job" },
            { letter: "D", text: "Formula field on Applicant that references Job" }
        ],
        answer: "C"
    },
    {
        id: "q29",
        question: " In the Lightning UI, where should a developer look to find information about a Paused Flow Interview?",
        options: [
            { letter: "A", text: "In the system debug log by Altering on Paused Row Interview" },
            { letter: "B", text: "On the Paused Row Interviews component on the Home page" },
            { letter: "C", text: "In the Paused Interviews section of the Apex Flex Queue" },
            { letter: "D", text: "On the Paused Row Interviews related List for a given record" }
        ],
        answer: "C"
    },
    {
        id: "q30",
        question: "A developer observes that an Apex test method fails in the Sandbox. To identify the issue, the developer copies the code inside the test method and executes it via the Execute Anonymous tool in the Developer Console. The code then executes with no exceptions or errors. Why did the test method fail in the sandbox and pass in the Developer Console?",
        options: [
            { letter: "A", text: "The test method is calling an @future method." },
            { letter: "B", text: "The test method relies on existing data in the sandbox." },
            { letter: "C", text: "The test method does not use System.runAs to execute as a specific user." },
            { letter: "D", text: "The test method has a syntax error in the code." }
        ],
        answer: "B"
    },
    {
        id: "q31",
        question: "A developer wrote an Apex method to update a list of Contacts and wants to make it available for use by Lightning web components. Which annotation should the developer add to the Apex method to achieve this?",
        options: [
            { letter: "A", text: "@RemoteAction(cacheable=true)" },
            { letter: "B", text: "@AuraEnabled" },
            { letter: "C", text: "@AuraEnabled(cacheable=true)" },
            { letter: "D", text: "@RemoteActio" }
        ],
        answer: "B"
    },
    {
        id: "q32",
        question: "Cloud kicks has a multi-screen flow that its call center agents use when handling inbound service desk calls. At one of the steps in the flow, the agents should be presented with a list of order numbers and dates that are retrieved from an external order management system in real time and displayed on the screen. What should a developer use to satisfy this requirement?",
        options: [
            { letter: "A", text: "An outbound message" },
            { letter: "B", text: "An Apex REST class" },
            { letter: "C", text: "An invocable method" },
            { letter: "D", text: "An Apex controller" }
        ],
        answer: "B"
    },
    {
        id: "q33",
        question: "A developer is migrating a Visualforce page into a Lightning web component. The Visualforce page shows information about a single record. The developer decides to use Lightning Data Service to access record data. Which security consideration should the developer be aware of",
        options: [
            { letter: "A", text: "Lightning Data Service ignores field-level security." },
            { letter: "B", text: "Lightning Data Service handles sharing rules and field-level security." },
            { letter: "C", text: "The isAccessible ( ) method must be used for field-level access checks" },
            { letter: "D", text: "The with sharing keyword must be used to enforce sharing rules." }
        ],
        answer: "B"
    },
    {
        id: "q34",
        question: "Which Apex class contains methods to return the amount of resources that have been used for a particular governor, such as the number of DML statements?",
        options: [
            { letter: "A", text: "OrgLimits" },
            { letter: "B", text: "Messaging" },
            { letter: "C", text: "Limits" },
            { letter: "D", text: "Exception" }
        ],
        answer: "C"
    },
    {
        id: "q35",
        question: "What should a developer use to script the deployment and unit test execution as part of continuous integration?",
        options: [
            { letter: "A", text: "Salesforce CLI" },
            { letter: "B", text: "Execute Anonymous" },
            { letter: "C", text: "Developer Console" },
            { letter: "D", text: "VS Code" }
        ],
        answer: "A"
    },
    {
        id: "q36",
        question: "A developer must provide custom user interfaces when users edit a Contact in either Salesforce Classic or Lightning Experience. What should the developer use to override the Contact's Edit button and provide this functionality?",
        options: [
            { letter: "A", text: "A Visualforce page in Salesforce Classic and a Lightning page in Lightning Experience" },
            { letter: "B", text: "A Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience" },
            { letter: "C", text: "A Lightning component in 5alesforce Classic and a Lightning component in lightning Experience" },
            { letter: "D", text: "A Lightning page in Salesforce Classic and a Visualforce page in Lightning Experience" }
        ],
        answer: "B"
    },
    {
        id: "q37",
        question: "What is the result of the following code?",
        options: [
            { letter: "A", text: "The record will not be created and a exception will be thrown." },
            { letter: "B", text: "The record will be created and no error will be reported." },
            { letter: "C", text: "The record will be created and a message will be in the debug log." },
            { letter: "D", text: "The record will not be created and no error will be reported." }
        ],
        answer: ""
    },
    {
        id: "q38",
        question: "A developer created a custom order management app that uses an Apex class. The order is represented by an Order object and an Orderltem object that has a master-detail relationship to Order. During order processing, an order may be split into multiple orders. What should a developer do to allow their code to move some existing Orderltem records to a new Order record?",
        options: [
            { letter: "A", text: "Add without sharing to the Apex class declaration." },
            { letter: "B", text: "Change the master-detail relationship to an external lookup relationship." },
            { letter: "C", text: "Create a junction object between Orderltem and Order." },
            { letter: "D", text: "Select the Allow reparenting option on the master-detail relationship." }
        ],
        answer: "C"
    },
    {
        id: "q39",
        question: "A developer is debugging the following code to determinate why Accounts are not being created Account a = new Account(Name = 'A'); Database.insert(a, false); How should the code be altered to help debug the issue?",
        options: [
            { letter: "A", text: "Add a try/catch around the insert method" },
            { letter: "B", text: "Collect the insert method return value a Saveresult variable" },
            { letter: "C", text: "Set the second insert method parameter to TRUE" },
            { letter: "D", text: "Add a System.debug() statement before the insert method" }
        ],
        answer: "B"
    },
    {
        id: "q40",
        question: "A developer wants to get access to the standard price book in the org while writing a test class that covers an OpportunityLineItem trigger. Which method allows access to the price book?",
        options: [
            { letter: "A", text: "Use Test.loadData ( )and a static resource to load a standard price book" },
            { letter: "B", text: "Use @TestVisible to allow the test method to see the standard price book." },
            { letter: "C", text: "Use Test,getStandardPricebookid ( ) to get the standard price book ID." },
            { letter: "D", text: "Use @IsTest (SeeAllData=True) and delete the existing standard price book" }
        ],
        answer: "C"
    },
    {
        id: "q41",
        question: "A custom picklist field, Food_Preference__c, exist on a custom object. The picklist contains the following options: 'Vegan','Kosher','No Preference'. The developer must ensure a value is populated every time a record is created or updated. What is the most efficient way to ensure a value is selected every time a record is saved?",
        options: [
            { letter: "A", text: "Set 'Use the first value in the list as the default value' as True." },
            { letter: "B", text: "Mark the field as Required on the object's page layout." },
            { letter: "C", text: "Set a validation rule to enforce a value is selected." },
            { letter: "D", text: "Mark the field as Required on the field definition." }
        ],
        answer: "D"
    },
    {
        id: "q42",
        question: "When a user edits the Postal Code on an Account, a custom Account text field named 'Timezone' must be updated based on the values another custom object object called. What is the optimal way to Implement this feature?",
        options: [
            { letter: "A", text: "Build an account assignment rule." },
            { letter: "B", text: "Build a flow with flow Builder." },
            { letter: "C", text: "Create an account approval process." },
            { letter: "D", text: "Create a formula field." }
        ],
        answer: "B"
    },
    {
        id: "q43",
        question: "A custom object Trainer_c has a lookup field to another custom object Gym___c. Which SOQL query will get the record for the Viridian City gym and it's trainers?",
        options: [
            { letter: "A", text: "SELECT ID FROM Trainer_c WHERE Gym__r.Name- Viridian City Gym'" },
            { letter: "B", text: "SELECT Id, (SELECT Id FROM Trainer_c) FROM Gym_c WHERE Name- Viridian City Gym'" },
            { letter: "C", text: "SELECT Id, (SELECT Id FROM Trainers) FROM Gym_C WHERE Name- Viridian City Gym'" },
            { letter: "D", text: "SELECT Id, (SELECT Id FROM Trainers__r) FROM Gym__c WHERE Name = 'Viridian City Gym'" }
        ],
        answer: "D"
    },
    {
        id: "q44",
        question: "What can be used to override the Account's standard Edit button for Lightning Experience?",
        options: [
            { letter: "A", text: "Lightning action" },
            { letter: "B", text: "Lightning component" },
            { letter: "C", text: "Lightning page" },
            { letter: "D", text: "Lightning flow" }
        ],
        answer: "B"
    },
    {
        id: "q45",
        question: "A developer is creating an app that contains multiple Lightning web components. One of the child components is used for navigation purposes. When a user click a button called component, the parent component must be alerted so it can navigate to the next page. How should this be accomplished?",
        options: [
            { letter: "A", text: "Create a custom event." },
            { letter: "B", text: "Update a property on the parent." },
            { letter: "C", text: "Call a method in the Apex controller." },
            { letter: "D", text: "Fire a notification." }
        ],
        answer: "A"
    },
    {
        id: "q46",
        question: "How can a developer check the test coverage of active Process Builder and Flows deploying them in a Changing Set?",
        options: [
            { letter: "A", text: "Use the code Coverage Setup page" },
            { letter: "B", text: "Use the Apex test result class" },
            { letter: "C", text: "Use the Flow properties page." },
            { letter: "D", text: "Use SOQL and the Tooling API" }
        ],
        answer: "D"
    },
    {
        id: "q47",
        question: " A developer must create a lightning component that allows users to input contact record information to create a contact record, including a salary__c custom field. what should the developer use, along with a lightning-record-edit form, so that salary__c field functions as a currency input and is only viewable and editable by users that have the correct field level permissions on salary__C?",
        options: [
            { letter: "A", text: "<ligthning-input-field field-name='Salary__c'></lightning-input-field>" },
            { letter: "B", text: "<lightning-input-currency value='Salary__c'></lightning-input-currency>" },
            { letter: "C", text: "<lightning-input type='number' value='Salary__c' formatter='currency'></lightning-input>" },
            { letter: "D", text: "<lightning-formatted-number value='Salary__c' format-style='currency'></lightning-formatted-number>" }
        ],
        answer: "D"
    },
    {
        id: "q48",
        question: "A software company uses the following objects and relationships: * Case: to handle customer support issues, * Defect_c: a custom object to represent known issues with the company's software, * case_Defect__c: a junction object between Case and Defector to represent that a defect Is a customer issue What should be done to share a specific Case-Defect_c record with a user?",
        options: [
            { letter: "A", text: "Share the parent Defect_c record." },
            { letter: "B", text: "Share the Case_Defect_c record" },
            { letter: "C", text: "Share the parent Case and Defect_c records." },
            { letter: "D", text: "Share the parent Case record." }
        ],
        answer: "C"
    },
    {
        id: "q49",
        question: "Universal Containers implemented a private sharing model for the Account object. A custom Account search tool was developed with Apex to help sales representatives find accounts that match multiple criteria they specify. Since its release, users of the tool report they can see Accounts they do not own. What should the developer use to enforce sharing permission for the currently logged-in user while using the custom search tool?",
        options: [
            { letter: "A", text: "Use the schema describe calls to determine if the logged-in users has access to the Account object." },
            { letter: "B", text: "Use the without sharing keyword on the class declaration." },
            { letter: "C", text: "Use the UserInfo Apex class to filter all SOQL queries to returned records owned by the logged-in user." },
            { letter: "D", text: "Use the with sharing keyword on the class declaration." }
        ],
        answer: "D"
    },
    {
        id: "q50",
        question: "A developer is asked to create a Visualforce page for Opportunities that allows users to save or merge the current record. Which approach should the developer to meet this requirement?",
        options: [
            { letter: "A", text: "A custom controller extension" },
            { letter: "B", text: "A custom controller" },
            { letter: "C", text: "Visualforce page JavaScript" },
            { letter: "D", text: "Standard controller methods" }
        ],
        answer: "A"
    },
];