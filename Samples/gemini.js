$(document).ready(function () {
    //gemini.projectComponentCreate();
});

var gemini = {
    projectGet: function () {
        var geminiUrl = "http://localhost/gemini/api/projects/17";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    projectGetAll: function () {
        var geminiUrl = "http://localhost/gemini/api/projects";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    projectCreate: function () {
        var geminiUrl = "http://localhost/gemini/api/projects";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Code: "GURI",
            Name: "GURI Desk",
            Description: "Supporting function for Client Projects",
            Color: "#ffffff",
            ReadOnly: "false",
            DescriptionRequired: "true",
            TemplateId: "10",
            PermissionId: "2",
            WorkflowId: "0",
            LabelId: "8",
            LeadId: "1"
        };

        $.ajax({
            url: geminiUrl,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    projectUpdate: function () {
        var geminiUrl = "http://localhost/gemini/api/projects";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Code: "HELP",
            Name: "Help Desk & Support",
            Description: "Supporting function for Client Projects",
            Color: "#ffffff",
            ReadOnly: "false",
            DescriptionRequired: "true",
            TemplateId: "10",
            PermissionId: "2",
            WorkflowId: "0",
            LabelId: "8",
            LeadId: "1",
            Id:51
        };

        $.ajax({
            url: geminiUrl,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    projectDelete: function () {
        var geminiUrl = "http://localhost/gemini/api/projects/44";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "DELETE",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    projectComponentGet: function () {
        var geminiUrl = "http://localhost/gemini/api/projects/17/components/34";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    projectComponentGetAll: function () {
        var geminiUrl = "http://localhost/gemini/api/projects/17/components";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    projectComponentCreate: function () {
        var geminiUrl = "http://localhost/gemini/api/projects/17/components";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Name: "Billing5",
            Description: "Raising quotations and generating invoices",
            ProjectId: "17",
            Lead: "1"
        };

        $.ajax({
            url: geminiUrl,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    projectComponentUpdate: function () {
        var geminiUrl = "http://localhost/gemini/api/projects/17/components";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Id: "81",
            Name: "BillingVv",
            Description: "Raising quotations and generating invoices2",
            ProjectId: "17",
            Lead: "1"            
        };

        $.ajax({
            url: geminiUrl,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    projectComponentDelete: function () {
        var geminiUrl = "http://localhost/gemini/api/projects/17/components/75";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "DELETE",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    projectVersionGet: function () {
        var geminiUrl = "http://localhost/gemini/api/projects/17/versions/16";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    projectVersionGetAll: function () {
        var geminiUrl = "http://localhost/gemini/api/projects/17/versions";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    projectVersionCreate: function () {
        var geminiUrl = "http://localhost/gemini/api/projects/17/versions";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Name: "5.5",
            label: "Newest Version",
            ProjectId: "17"
        };

        $.ajax({
            url: geminiUrl,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    projectVersionUpdate: function () {
        var geminiUrl = "http://localhost/gemini/api/projects/17/versions";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Id: "39",
            Name: "5.5",
            label: "Closed Version",
            ProjectId: "17",
        };

        $.ajax({
            url: geminiUrl,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    projectVersionDelete: function () {
        var geminiUrl = "http://localhost/gemini/api/projects/17/versions/39";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "DELETE",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    projectRoadmapGet: function () {
        var geminiUrl = "http://localhost/gemini/api/items/18/roadmap";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    projectChangelogGet: function () {
        var geminiUrl = "http://localhost/gemini/api/items/18/changelog";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    customFieldGet: function () {
        var geminiUrl = "http://localhost/gemini/api/customfields/22";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    customFieldGetAll: function () {
        var geminiUrl = "http://localhost/gemini/api/customfields";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    customFieldCreate: function () {
        var geminiUrl = "http://localhost/gemini/api/customfields";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Name: "Freetext",
            ScreenDescription: "Enter any comments",
            ScreenLabel: "Freetext",
            ScreenTooltip: "Freetext",
            Type: "T",
            TemplateId: "10"
        };

        $.ajax({
            url: geminiUrl,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    customFieldUpdate: function () {
        var geminiUrl = "http://localhost/gemini/api/customfields";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Id: "77",
            Name: "Restricted Textfield",
            ScreenDescription: "Enter any comments",
            ScreenLabel: "Freetext",
            ScreenTooltip: "Freetext",
            Type: "T",
            TemplateId: "10"
        };

        $.ajax({
            url: geminiUrl,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    customFieldDelete: function () {
        var geminiUrl = "http://localhost/gemini/api/customfields/77";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "DELETE",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    usernameGet: function () {
        var geminiUrl = "http://localhost/gemini/api/users/username/manager";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    userGetAll: function () {
        var geminiUrl = "http://localhost/gemini/api/users";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    userActiveGet: function () {
        var geminiUrl = "http://localhost/gemini/api/users/active";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    userActiveCountGet: function () {
        var geminiUrl = "http://localhost/gemini/api/users/active/count";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    userGroupGet: function () {
        var geminiUrl = "http://localhost/gemini/api/groups/2";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    userGroupGetAll: function () {
        var geminiUrl = "http://localhost/gemini/api/groups";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    userGroupCreate: function () {
        var geminiUrl = "http://localhost/gemini/api/groups";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Name: "Administrator",
            description: "Department Administrator",
            active: "true"
        };

        $.ajax({
            url: geminiUrl,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    userGroupUpdate: function () {
        var geminiUrl = "http://localhost/gemini/api/groups";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Id: "12",
            Name: "Administrator",
            description: "General Administrator",
            active: "true"
        };

        $.ajax({
            url: geminiUrl,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    userGroupDelete: function () {
        var geminiUrl = "http://localhost/gemini/api/groups/12";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "DELETE",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    typeGet: function () {
        var geminiUrl = "http://localhost/gemini/api/type/55";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    typeGetAll: function () {
        var geminiUrl = "http://localhost/gemini/api/type";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    typeGetAllByTemplate: function () {
        var geminiUrl = "http://localhost/gemini/api/type/template/10";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    typeCreate: function () {
        var geminiUrl = "http://localhost/gemini/api/type";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Label: "Bug",
            TemplateId: "10"
        };

        $.ajax({
            url: geminiUrl,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    typeUpdate: function () {
        var geminiUrl = "http://localhost/gemini/api/type";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Id: "87",
            Label: "Bugs",
            TemplateId: "10"
        };

        $.ajax({
            url: geminiUrl,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    typeDelete: function () {
        var geminiUrl = "http://localhost/gemini/api/type/87";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "DELETE",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    priorityGet: function () {
        var geminiUrl = "http://localhost/gemini/api/priority/29";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    priorityGetAll: function () {
        var geminiUrl = "http://localhost/gemini/api/priority";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    priorityGetAllByTemplate: function () {
        var geminiUrl = "http://localhost/gemini/api/priority/template/10";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    priorityCreate: function () {
        var geminiUrl = "http://localhost/gemini/api/priority";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Label: "high",
            TemplateId: "10"
        };

        $.ajax({
            url: geminiUrl,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    priorityUpdate: function () {
        var geminiUrl = "http://localhost/gemini/api/priority";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Id: "53",
            Label: "medium",
            TemplateId: "10"
        };

        $.ajax({
            url: geminiUrl,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    priorityDelete: function () {
        var geminiUrl = "http://localhost/gemini/api/priority/53";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "DELETE",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    severityGet: function () {
        var geminiUrl = "http://localhost/gemini/api/severity/30";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    severityGetAll: function () {
        var geminiUrl = "http://localhost/gemini/api/severity";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    severityGetAllByTemplate: function () {
        var geminiUrl = "http://localhost/gemini/api/severity/template/10";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    severityCreate: function () {
        var geminiUrl = "http://localhost/gemini/api/severity";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Label: "Major",
            TemplateId: "10"
        };

        $.ajax({
            url: geminiUrl,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    severityUpdate: function () {
        var geminiUrl = "http://localhost/gemini/api/severity";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Id: "54",
            Label: "Low6",
            TemplateId: "10"
        };

        $.ajax({
            url: geminiUrl,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    severityDelete: function () {
        var geminiUrl = "http://localhost/gemini/api/severity/54";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "DELETE",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    statusGet: function () {
        var geminiUrl = "http://localhost/gemini/api/status/65";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    statusGetAll: function () {
        var geminiUrl = "http://localhost/gemini/api/status";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    statusGetAllByTemplate: function () {
        var geminiUrl = "http://localhost/gemini/api/status/template/10";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    statusCreate: function () {
        var geminiUrl = "http://localhost/gemini/api/status";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Label: "Done",
            TemplateId: "10"
        };

        $.ajax({
            url: geminiUrl,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    statusUpdate: function () {
        var geminiUrl = "http://localhost/gemini/api/status";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Id: "132",
            Label: "Done2",
            TemplateId: "10"
        };

        $.ajax({
            url: geminiUrl,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    statusDelete: function () {
        var geminiUrl = "http://localhost/gemini/api/status/132";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "DELETE",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
            
        });
    },

    resolutionGet: function () {
        var geminiUrl = "http://localhost/gemini/api/resolution/21";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    resolutionGetAll: function () {
        var geminiUrl = "http://localhost/gemini/api/resolution";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    resolutionGetAllByTemplate: function () {
        var geminiUrl = "http://localhost/gemini/api/resolution/template/10";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    resolutionCreate: function () {
        var geminiUrl = "http://localhost/gemini/api/resolution";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Label: "Completed",
            TemplateId: "10"
        };

        $.ajax({
            url: geminiUrl,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    resolutionUpdate: function () {
        var geminiUrl = "http://localhost/gemini/api/resolution";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Id: "50",
            Label: "Open",
            TemplateId: "10"
        };

        $.ajax({
            url: geminiUrl,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    resolutionDelete: function () {
        var geminiUrl = "http://localhost/gemini/api/resolution/50";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "DELETE",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }

        });
    },

    configurationGet: function () {
        var geminiUrl = "http://localhost/gemini/api/admin/configuration";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    appNavUpdate: function () {
        var geminiUrl = "http://localhost/gemini/api/admin/appnav/update";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {       
            ProjectId: "17",
            id: "18",
            Title: "Urgent Issues",
            UserId: "1",
            Key: "ALL"            
        };

        $.ajax({
            url: geminiUrl,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    permissionGet: function () {
        var geminiUrl = "http://localhost/gemini/api/admin/permissionsets";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    alertTemplatesGet: function () {
        var geminiUrl = "http://localhost/gemini/api/admin/alerts/templates";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    itemsGet: function () {
        var geminiUrl = "http://localhost/gemini/api/items/34";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    itemsCreate: function () {
        var geminiUrl = "http://localhost/gemini/api/items";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            ProjectId: "17",        
            PriorityId: "29",
            Title: "Fix comments overlay issue"
        };

        $.ajax({
            url: geminiUrl,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    itemsUpdate: function () {
        var geminiUrl = "http://localhost/gemini/api/items";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Id: "230",
            ProjectId: "17",
            TypeId: "55",
            PriorityId: "29",
            SeverityId: "30",
            StatusId: "70",
            ResolutionId: "21",
            Title: "Fix comments overlay issue",
            Description: "This only happens sometimes",
            ReportedBy: "1"
        };

        $.ajax({
            url: geminiUrl,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    itemsDelete: function () {
        var geminiUrl = "http://localhost/gemini/api/items/230";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "DELETE",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    itemSearchGet: function () {
        var geminiUrl = "http://localhost/gemini/api/items/filtered";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData =
            {
                SearchKeywords: "user",
                IncludeClosed: "false",
                Projects: "ALL"
            }

        $.ajax({
            url: geminiUrl,
            type: "POST",
            data: geminiData,
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    itemRepeatGetAll: function () {
        var geminiUrl = "http://localhost/gemini/api/items/repeated";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    itemCommentGet: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/comments/103";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    itemCommentGetAll: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/comments";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    itemCommentCreate: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/comments";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            ProjectId: "17",
            IssueId: "36",
            UserId: "1",
            Comment: "This item was already done"
        }

        $.ajax({
            url: geminiUrl,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    itemCommentUpdate: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/comments";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Id: "113",
            ProjectId: "17",
            IssueId: "36",
            UserId: "1",
            Comment: "It's still not fixed"
        }

        $.ajax({
            url: geminiUrl,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    itemCommentDelete: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/comments/113";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "DELETE",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    itemCustomFieldDataCreate: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/customfield/data";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            ProjectId: "17",
            IssueId: "36",
            UserId: "1",
            Data: "dropdownstatic2",
            CustomFieldId:"46"
        }

        $.ajax({
            url: geminiUrl,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    itemCustomFieldDataUpdate: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/customfield/data";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Id: "219",
            ProjectId: "17",
            IssueId: "36",
            UserId: "1",
            Data: "dropdownstatic3",
            CustomFieldId: "46"
        }

        $.ajax({
            url: geminiUrl,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    itemTimeGet: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/times/63";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    itemTimeGetAll: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/times";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    itemTimeCreate: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/times";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            ProjectId: "17",
            IssueId: "36",
            UserId: "1",
            Comment: "Worked through lunch",
            Hours: "3",
            Minutes: "25",
            EntryDate: "11/01/2013"
        }

        $.ajax({
            url: geminiUrl,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    itemTimeUpdate: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/times";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Id: "64",
            ProjectId: "17",
            IssueId: "36",
            UserId: "1",
            Comment: "Worked through lunch and 15 minutes break",
            Hours: "3",
            Minutes: "25",
            EntryDate: "11/01/2013"
        }

        $.ajax({
            url: geminiUrl,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    itemTimeDelete: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/times/64";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "DELETE",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    itemAttachmentGet: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/attachments/53";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    itemAttachmentGetAll: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/attachments";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    itemAttachmentCreate: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/attachments";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            ProjectId: "17",
            IssueId: "39626",
            Name: "Screenshot.png",
            //This Content string is the image byte array converted to json
            Content: "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",
            ContentType: "image/png"
        }

        $.ajax({
            url: geminiUrl,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    itemAttachmentUpdate: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/attachments";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey
        var geminiData = {
            Id: "58",
            ProjectId: "17",
            IssueId: "36",
            Name: "Screenshot.png",
            //This Content string is the image byte array converted to json
            Content: "iVBORw0KGgoAAAANSUhEUgAAA9gAAAOmCAIAAACfYKqXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAApRRJREFUeF7tvQ2UXVWZoF2DdIttR11DM9MyPeLHfDa9ZGbQxmlgZqCl29Wtwgz0t76Bb9GurwdmForKz8ePWYPEH9oIhIYBkrI6IRLIn0kMISQmVSZgoiR0DKZLCG0C6RhiW1RijDEdo6Yj5HvvPffn3HvPrdr3PXufu/c+z121tOrmvHu/+3n3OfXUZp9zB07wggAEIAABCEAAAhCAAAQKJzBQeI90CAEIQAACEIAABCAAAQicQMSZBBCAAAQgAAEIQAACEOgDAUS8D9DpEgIQgAAEIAABCEAAAog4cwACEIAABCAAAQhAAAJ9INBVxH/ACwI5CPRhLtMlBCAAAQhAAAIQCIrARCJ+lBcEVARE4IM6C0gWAhCAAAQgAAEI9IEAIq4yTYImJICI9+FUpksIQAACEIAABEIjgIjj1PYJIOKhXQfIFwIQgAAEIACBPhBAxO1rKC0i4n04lekSAhCAAAQgAIHQCCDiaLN9Aoh4aNcB8oUABCAAAQhAoA8EEHH7GkqLiHgfTmW6hAAEIAABCEAgNAKIONpsnwAiHtp1gHwhAAEIQAACEOgDAUTcvobSIiLeh1OZLiEAAQhAAAIQCI1ATyK+Z+VNlzZeD2xtCOfWB5pvX3rTyj1Hj8qR1f9vvjqPqf5b9e1UU7V3au3V2ugSmzTe8o+XJt3z6i8BRDy06wD5QgACEIAABCDQBwK9injdcytO3vBnceEWl+4i4m3H1Cz6gQceaNpzq8BvfSAJ6Ww/2zPlODy8vwqe9I6I9+FUpksIQAACEIAABEIjkEPEm86rFfGadqfsu8Xv0yvuGRLfbpzZsT54aelyQMRDuw6QLwQgAAEIQAACfSDQq4hn7Uxp3R1ivjWlIeAt6+Cp/S911Z9wa0rdck2XzUtnxX0YMCLeh1OZLiEAAQhAAAIQCI1AryKeuHHbHhDdinjLjvO2jeJVeWwscRs4duem9D74J13WCCDioV0HyBcCEIAABCAAgT4Q0Il4SpKz93Bn3qzZur2k1a5rP219ILXJ21zE2ZXi198AiHgfTmW6hAAEIAABCEAgNAJaEa89rqRxM2XzsSn1rSmpB6lUbuVs317SvsrdMPH2B7C0Pxil83bMioZzk6ZPKo6Ih3YdIF8IQAACEIAABPpAoCcR98n1yMVjAoh4H05luoQABCAAAQhAIDQCiLjHPhtsaoh4aNcB8oUABCAAAQhAoA8EEPFgbdfjxBHxPpzKdAkBCEAAAhCAQGgEEHGPfTbY1BDx0K4D5AsBCEAAAhCAQB8IIOLB2q7HiSPifTiV6RICEIAABCAAgdAIIOIe+2ywqSHioV0HyBcCEIAABCAAgT4QQMSDtV2PE0fE+3Aq0yUEIAABCEAAAqERmEjERad4QUBHILQTgXwhAAEIQAACEIBA0QS6injRidAfBCAAAQhAAAIQgAAEykQAES9TtRkrBCAAAQhAAAIQgIA3BBBxb0pBIhCAAAQgAAEIQAACZSKAiJep2owVAhCAAAQgAAEIQMAbAoi4N6UgEQhAAAIQgAAEIACBMhFAxMtUbcYKAQhAAAIQgAAEIOANAUTcm1KQCAQgAAEIQAACEIBAmQgg4mWqNmOFAAQgAAEIQAACEPCGgFLEr//mOF8QUBPwZv6TCAQgAAEIQAACEOgbAUScvyj6QKBv852OIQABCEAAAhCAgDcEEPE+aKh6ITmaQG/mP4lAAAIQgAAEIACBvhFAxBHxPhDo23ynYwhAAAIQgAAEIOANAUS8DxoazcK2eiDezH8SgQAEIAABCEAAAn0jgIgj4n0gYDLff8ALAhCAAAQgAAEIRE0AEe+DhqoXkqMJNBRxk8M4BgIQgAAEIAABCARKABFHxPtAwORskT+ATQ7jGAhAAAIQgAAEIBAoAUS8DxoazcK2eiAmZwsibkKJYyAAAQhAAAIQCJeAVREfP94EcfzY8sqH/hx+OfXeiaM/r6pby5v7xhsq3Hj/+BY57O+PHZXmmiGvvfz3P9/XSbp2QLtPbzkqx7e8ufzQa7XoLiFqrSSwVwImJwwibkKJYyAAAQhAAAIQCJeAPREXb67Jd0V/txytynTFuRtCXPHso4cOt7xZse3kyORLVLv+Y7XBl2s+nW6n9bDOz/is/T3QIuIVC0+l16s4crxdAiYnDCJuQoljIAABCEAAAhAIl4BVEW9R6kSsWwVaFLmyGp16s1XfO0V8eWdIm693inhnv2m/zz6eDSqFEjA5YRBxE0ocAwEIQAACEIBAuATsiXhjM0kVRnXlO2NFvLoRJb01Jb0cnrEivrxysBzTy4p4p4gnu1waL7am9PuvEZMTBhE3ocQxEIAABCAAAQiES8CqiDf1rqLaHc7daeeyEaVtJ3f71pTKRvPx40cP/Ty1xWWyrSmZIt7cl9LIrdA1YLtbO0JvzeSEQcRNKHEMBCAAAQhAAALhErAn4hVdTlbBa2vedRFvv2mypz3i9Ts+Xzva3Gveu4h3bFVP3SGKjveBgMkJg4ibUOIYCEAAAhCAAATCJWBPxCv7sJuvrK0p6aejpOy8cm9l487OpIX6U1May9iVY9JCn1o473qzZrWlxi6U1O6U1B8MfXDQ0BezreRvcsIg4iaUOAYCEIAABCAAgXAJWBRxpBYCpgRMThhE3IQSx0AAAhCAAAQgEC4BRNzUHa2sBNNIQsDkhEHETShxDAQgAAEIQAAC4RJAxBHxPhAwOWEQcRNKHAMBCEAAAhCAQLgEEPE+aCjr4iYnDCJuQoljIAABCEAAAhAIlwAijoj3gYDJCYOIm1DiGAhAAAIQgAAEwiWAiPdBQ1kRNzlhEHETShwDAQhAAAIQgEC4BBBxRLwPBExOGETchBLHQAACEIAABCAQLgFEvA8ayoq4yQmDiJtQ4hgIQAACEIAABMIloBTxcAdM5qEQQMRDqRR5QgACEIAABCCgI4CI67gR5ZwAIu4cMR1AAAIQgAAEINBXAoh4X/HTeXcCiDizAwIQgAAEIACBuAkg4nHXN+DRIeIBF4/UIQABCEAAAhAwIICIG0DikH4QQMT7QZ0+IQABCEAAAhAojgAiXhxreuqJACLeEy4OhgAEIAABCEAgOAKIeHAlK0vCiHhZKs04IQABCEAAAmUlgIiXtfLej7tEIv7CrEvrr1kveF8YEoQABCAAAQhAwBIBpYiLJPGCgJqAyeztTcT3rb2lIbPt33gvt4i4yYTgGAhAAAIQgEB0BPQifpQXBFQEDA3b8LDaKTmRiFfF3GcbR8Sju7AyIAhAAAIQgIAJAURc5ZIE5SBgaNiGh5mKuM8qjoibXKs4BgIQgAAEIBAdAUQ8h1ESqiJgaNiGh2WIeHPxO2W4l156y9p9np6/iLinhSEtCEAAAhCAgFsCiLjKJQnKQcDQsA0Pm1DET7TsWPF2dwoi7vYqR+sQgAAEIAABTwkg4jmMklAVAUPDNjzMXMQbHp6y85ZV8rS1Z66qV95sHJSEtjt0i/l3WYPvWKefUMQ7d7+3NdslOvvt5rvJCDX5e3otIy0IQAACEIBAcAQQcZVLEpSDgKFhGx42kYinHTZlr3oRX5t6NkuGiLcYdu3ZLW3L8FmH3HJL84kvLYdPdAdqajyZyt3SUcbfILW3WmIN8g/uCkfCEIAABCAAAY8JIOI5jJJQFQFDwzY8LEPEO59j2GrDahFvabhDxLs8PjH7L4Buz1pMZZqlxS1h9WOzxtPq8PUcmu/WYyftxOOt9R5fV0kNAhCAAAQgYEQAEVe5JEE5CBgatuFhRiLe+vDCPCLevtsk+3bQ7K3pky1StzxlMfvglr0kDUdOdVcT7Pa19Pb178Ywesnf6IrCQRCAAAQgAAEIGBOwKuJbH2gu2N20ck/F1fasvCm1iPfA1qq/tbxZe6/l/ep7yVHNEGkx3UG92VR8Wg63PlDLoPJmW1zqX3L4JKFKAoaGbXiYmYi3OK5exDtv90yJbIujZ7zf7dDOjdoypm45yj9ltNM8Okmi/vOsWfXP7Kxm3ra/vYKuh/yNLyocCAEIQAACEICAGQF7Ii7e3KK+iSCn362YdfWQ1JuV99IqLcpc/7F61MqaT7e2XjHrLgLe1O5s3ZZIPFxp0JbCDA3b8LAMEU/pcuvKcOdycW83a2bcfNntPssMke5+S2bninbHTZTp0zmjoeZb1RxrP96y9oX6pvb02+ndJj3kb3ZF4SgIQAACEIAABIwJWBXxDDlu1/PqIa0i3uLF7SJeWQRvC6ktcXcX8fY/AFL+2O79ltSSZnohYGjYhodNLOItS8t1AVWviGc8/9BcZLOfyVJNP7+Ip8Rdkmx4+L6WRfBGN9kb0bvdJ+rv89eNL3McCAEIQAACEPCTgD0Rb91yUrfr9hXx1KaTZG9Jm093iHjF2uWYXlbEu4v4hAvpvbgkx+YgYGjYhof1IuK1reLdlNjo8YVt57G5iHfdBdLysPOMmygn2Jae9eiUxjJ4292ksxqPfEkbdw/5+3kFIysIQAACEIBAwASsinhTzhorzy3bwTvsvHOfSKeIV3Z437Rya8vGl4m3pnQT8TaZz6GShOYhYGjYhodNLOLZDw9J36HYcNnMXSzSevcdJZWuexDZLo8Y79JvLzdrtq6q15+G2HaDZuMhiS0r3z3kH/BljtQhAAEIQAACfhKwJ+Itd0emRbxzS3YPe8Trd3zeJK/k9s/qa9Kl7U7pZldKHnm2GWto2IaHZYj4pI8GnOj53B2P/7Ym4q1PPOmSZNOSJ0+y60MZq21nPNyw5f0EHCLu54WZrCAAAQhAoBwE7Il466NJsramNGSuY+N4bYNKY/m8voGl4d6Vx54Yi3j6GSmpOz+5SdOmTedoy9CwDQ8zFfHWDR6ZH12T/rierp+s2XZd6FFks/q9Ze3a+rNNmvpc7WYiF+/cr569+t/eitnHck701JZyXBkZJQQgAAEIQKAAAhZFPIeaEVomAoaGbXiYgYhn323YuVPE8R7x+uncuelkwkX3ThvPuGe0fXW75WN4Mnfi1LLp8Q+JAi5JdAEBCEAAAhAoDwFEvEwK7MdYDQ3b8LDynKuMFAIQgAAEIACByAgg4n7IaZmyMDRsw8MiOyEZDgQgAAEIQAAC5SGAiJdJgf0Yq6FhGx5WnnOVkUIAAhCAAAQgEBkBRNwPOS1TFoaGbXhYZCckw4EABCAAAQhAoDwEEPEyKbAfYzU0bMPDynOuMlIIQAACEIAABCIjgIj7IadlysLQsA0Pi+yEZDgQgAAEIAABCJSHgF7ExZN4QUBHwOQEQ8RNKHEMBCAAAQhAAALhElCKeLgDJvNQCCDioVSKPCEAAQhAAAIQ0BFAxHXciHJOABF3jpgOIAABCEAAAhDoKwFEvK/46bw7AUSc2QEBCEAAAhCAQNwEEPG46xvw6BDxgItH6hCAAAQgAAEIGBBAxA0gcUg/CCDi/aBOnxCAAAQgAAEIFEcAES+ONT31RAAR7wkXB0MAAhCAAAQgEBwBRDy4kpUlYUS8LJVmnBCAAAQgAIGyEkDEy1p578eNiHtfIhKEAAQgAAEIQCAXAUQ8Fz6C3RFAxN2xpWUIQAACEIAABHwggIj7UAVyyCDQq4i/Xn2BEgIQgAAEIAABCKQJ+GwIiDhz1VMCPYk4Cu5pFUkLAhCAAAQg4AcBP1UBEfdjdpBFBwFzEffz1KKkEIAABCAAAQh4RcBDYUDEvZohJNMkgIgzGyAAAQhAAAIQsEgAEbcIk6YiJ2Au4pGDYHgQgAAEIAABCERKgBXxSAsb/rAQ8fBryAggAAEIQAACEJiIACLO/PCUACLuaWFICwIQgAAEIAABSwQQcUsgacY2AX9FfHx42rXJa3C0OerRwYw3bUOhPQhAAAIQgAAEIiKAiEdUzLiG4quIjw8PDo9XUYt6T6t9W3HzxMor39XfjasgjAYCEIAABCAAAcsEEHHLQGnOFgFfRbwxvqZ8V+27sTqe8nNbLGgHAhCAAAQg4DGB1157rdfsJgix21qviRV8PCJeMHC6MyXgr4jXt6Y0N6a0uHeLlXeOdiMvCEAAAhCAQCwERkZGnnzyyeHh4ZU9vr7+9a9LhISnSVhpzdQz/DgOEfejDmTRQcBfEa+lmtqE0ouIU2oIQAACEIBAHAT279+/bt268fHxX6he+/btEx2XRhIadlsLhTAiHkqlSpen9yKe2iTO1pTSTU8GDAEIQAACJzZv3qy28ETdf/jDH0ojCUq7rYVSHkQ8lEqVLk9fRbzlZs36znBu1izd/GTAEIAABHoicPz48V/G9fr5z3++YcMG1VJ4S9AzzzwjJGVfuOxRsdVaT6Xp78GIeH/503tXAr6KePJglOqr5ekoPL6QyQwBCEAAAhkEvvLywzdsuuqdywbi+5JN3p3q/OTqrz2a9ZL3Mz1bGkmoZbbWCFm56nFpVf53YllvtBbKXETEQ6lU6fL0V8RLVwoGDAEIQAACGgIHf37gT4f/XXz+3RhRpjqLLq/59p7OL3k/j4hL+JINU7s10vT1utZrCtaPGES8H9Tp04AAIm4AiUMgAAEIQMBfAomF/8fV71i5a/HYT/7h6NGjsp0jphcinn/yIeL5GdKCEwKIuBOsNAoBCEAAAoUQWPzynMTC/+HHe49VX/8U3QsRzz+VEPH8DGnBCQFE3AlWGoUABCAAgUIIJMvhshaeKLjcjBjfS0T8Zx2vCbamdB4s76T3iGcekLzZ2JoywTHp1gopsoVOEHELEGnCBQFE3AVV2oQABCAAgQIIyDNSko3UsiNFRFwU/PUYX+LQh1KvlU+uyrxNM/2mHJMOke/TIt72T5V/fXJFZpvyfufB6dYKqLKVLhBxKxhpxD4BRNw+U1qEAAQgAIFCCMiDChMRl33hyXJ4jB7+ujj0j1Kvbmvh6Rs35Zh0iHyfFvG2f5IfX3755UVLHpHbNNNf8o6833lwurVC6myhE0TcAkSacEEAEXdBlTYhAAEIQKAAAg0Rl1sz4xbxsdTLUMTTIfJ9WsTb/in58dm/2fSVFUMNEZfv5Z3MI9OtFVBlK10g4lYw0oh9Aoi4faa0CAEIQAAChRAoj4j/Q+r1+BMrJ92aIsekQ+T7tIi3/VPjx7XDqxavvldcXP5Xvu92WLq1QupsoRNE3AJEmnBBABF3QZU2IQABCECgAALlFHHx4I0bv/nVr23IfI748jUbN2zY2OnQJiIuUUu/unjBqi/I/05g4Yh4AXObLspCABEvS6UZJwQgAIHoCHQX8efvPTf9uvf5js3jzz9Zef2o/n4qoOXgHz35yZaW5IdPNqOS6NamJuy65R9bOuqWgDQvDt2mxRPvTpF/NRfxx1csm3x9fcWybuvrocwpVsRDqVTp8kTES1dyBgwBCEAgFgLdRLwqtTVfrgluu4q3eXgi1Im9Z4h4h3unvb6lqYyuG8Hp9jPTynpT3msT8QmWw5M18sxF8W4r4snzCif+6jR7PuI+lnOIcfSbACLe7wrQPwQgAAEIKAmYbE2pLWm3qXRVeTvkXCXimU0lol7rO+mnLZGsvLJE/Fe/+tXGjS1bTVYY7BGXY9rWsJ9++mmhLA+WaWtNtyKetBbQixXxgIpVrlQR8XLVm9FCAAIQiIiAgYgnbtu+ov38vZVX+36V7ivijd0pnXtcsptKe3iXpfkWS6/tccn4S0D+5Zvf/OaLL7448abtif91dHT0mWeeSSpvt7VQZhMiHkqlSpcnIl66kjNgCEAAArEQ6C7iLVu7O+z5R9X94R37xrvsYqltQ6k32Sr1XZpqLIA3l93b/yQwFvEfLbr+j2bPnv3888/rXFwsfO3atfLw76Ts+/fvlx9ttRbKVELEQ6lU6fJExEtXcksD/kdnL0sJ0ky5CIgqlWvAjLZKwGBFvL7xO63PVQXO2PY9sYg3NpEbNNVls3fLDnRjEa/8IfCTn/xElrSHV8yTzdk9vWQjyre+9a2f/vSn6SkjH40prX3jG9/oqSk5OLO1ICYjIh5EmcqYJCJexqrbGLN4+E9ffdVGS5U2pKmXqi9p1labtFMGAiIor7zyyo7q6zu8ykfg2WefTT5ZU0TzZz/7mXyszy86Xz98/OMVAf744z+s/Vv1jcqP4vHHqq/amrehiKf2lmcpfYZgZ2xUad8y3vVu0ZbHvWRtLJdt3wmELVu2yEftyKDKcO73OkZEvFdiHF8QAUS8INDRdZMY86MDA1a+pKmvf/3riHh008TtgOQmtp07d7766quiV257onVfCXRZERddlVdtQ0r9sYDN/Snpp5yIxcpHcko73Z6akvLgzpbaHlzYbCP7KSuap6ZMMhbpEhE3mZ6IuAkljukDAUS8D9Cj6NK6iI+MjCDiUUyNggYh8vG9732voM7oxlcCqueIZ99dWVkXN7hZs9WwO5tqe4h4cpNnao969+eId/9LYJJnoiPiJtMTETehxDF9IICI9wF6FF0i4lGUMeBB7NmzR9bCAx4AqdsgYLJHvGVrR32fd+fDT2RdXF7tB0/88wQPLuytoVxHI+ImUwkRN6HEMX0ggIj3AXoUXSLiUZQx4EHIfz9hR0rA9bOUukLEuz3lRHS2uVncTIy7PjDFLNzWUYi4yWxCxE0ocUwfCCDifYAeRZeIeBRlDHUQYjCyOzzU7MnbHgGFiE+gv72KuC2TztkOIm4yoRBxE0oc0wcCiHgfoEfRJSIeRRkDHoQ8ICTg7EndEgG7Ii7/jSWnE/clHBE3mU2IuAkljukDAUS8D9Cj6BIRj6KMAQ+im4i/+o1vfPWMM0we5iOHycHBIXh2/zf+0+ozksfVTfwlh8nBwQ2wp4QRcZ6aYjhhEHFDUBxWNAFEvGjisfSHiMdSyVDH0U3EDS08MXU5OLjxG1p44uhycHAD7ClhRBwRN5wwiLghKA4rmgAiXjTxWPpDxGOpZKjj6CbiJmvh6WOyx/93cy+68sba16fX/7hASD9eN/2iCXucdCG87YDM3Cu91Ad467p9BY5P1dWP1t965fS1tQ9ob7Ygo/jPU9ck45WP8pFnnsgmjck2h/zyJ2M//tnx7KPYmqIqTxhBiHgYdSphloh4CYtuZciIuBWMNKIm4E7Eq5I698VGZiLlD7+gzrPXwAJEvHWA+9Z++sYiByhARkdHL7/88rdVX/KN/DgJJZWI1z6Dsvoc79TDv52KePOB3+0f6JN+FHjnoxMn++th4n9nj7jJWYaIm1DimD4QQMT7AD2KLhHxKMoY8CBciXgX58tB6oWHslZzuzXoXMQ7B2h/yBPRkgfAi38PpF7yo7w5UUzvIl618Ibwpn9yJ+LSS73H1u6rnxNk275Tbo6Im5yeiLgJJY7pAwFEvA/Qo+gSEY+ijAEPwpWIy/p39s6QysrxrevWPyQ7OmoL5GLYte0rD/1djeSLD9c3tFx5Y/XN6npzclit2YyoEycab05/6GHHW1MyBlhJMhmC5H/ruhcaOTfGlcqwdmTyzkN/V8/c+D8aXHbZZWkLT76XN41FvIVVamvK4R//cHzv2L4fjO3/yZhoeGVJ+pc/3S8/Vr5eXPjR2rK4OxFPL1tXTLy+KF753qGG8xH3ZpcxRNyME0cVTgARLxx5JB0i4pEUMthhOBLx7gvSiVI3tqyk1rkr67WprSxVpJV2mr7e2N+cGZUofrJRu9qLyz3iWQNsJlD9Q6KebWWjfPJ9ZtqJEFcHXjmynUB6ZnWa98TvtM/K5op4O6uGiO//wb7Dv6zuET/+sx99Y3p6M4oI8q9+9vKjH0ts+JebP3fudSufr6yYd3z6/N219xrenCxl17eVpNe7JzHr9Bq4fP/JJzM7zLcjpRHNirjJZQwRN6HEMX0ggIj3AXoUXSLiUZQx4EE4EvGKU060Il6/r7Gihs3F71Z5rb/fKeKZUa0e73xryuQr4o17N5M17xMnsgdb/1eZRFl/ijgR8Q5WDRF/9Qdje+sr4s/P/+i5n5AFcbHun9ZWxMd2iIhXl6grIt7cNF4R5mTluqLLj/+w+hzx5hJ2ouBV6e5he0l6OTxpLatDSxbOU1MMr2KIuCEoDiuaACJeNPFY+kPEY6lkqONwJeJV6UxtyWjwSa/FJurZ8RyPVGz2injXqOZysnMRn3CPeHVrSqaIdz60pAcRT0+yXFtTJhLx+op4Taqf/JEsjcs2lV9WhLdjRbyi3tVX3a/Tt3Y2b+9M2bfpBpNOYa+uiDc6NG2nB09nRdzkKoaIm1DimD4QQMT7AD2KLhHxKMoY8CBciXh1n3RzhTtZ7q2sbbeKeLKHpG1jdGqHRqWR1FbyutlnPqIkZbTJZnGXW1NkQBM8NaWSdr331GGTpT3Zinh6nsl9mW9961vTW1PkR+ObNdtZNVbEfzI+tvfgz2qPL0yWpMdkOfynVQ9//ZffX/g/z/14skhe3ZqSKeL1FfGmA/cq4q3OXWtHskHE+3+pQcT7XwMyyCSAiDMxdAQQcR03omwR6CbiC9/yFvNHiS97xzsy80k/Zrsupm0iLnGpGzHrq+ONmzUfWlfdu1J18VprNcHNiKrusU42tMxdO9lzxP/tireYP0r8P66efIDp54hXVsQfnlvfdZNeBe9MW7kiLkDkeYWyLi7+LS/5prfHF7aySt2s+bPD+2s3a/5g7Md7V1aemvKd2s2aO75y3bnnfu6bP6hoeXVrSrJxpbZtJNnuXV0Sv/s7rQvRvYl4pobXmq6reA87XIzXxFkRN7mqIOImlDimDwQQ8T5Aj6JLRDyKMgY8iAk+4l702sTF5bBAP+Je9NrExeWwXj/ivnVrSgDTY4JP1uzyHPHqZvB7763fq5l+3vePHv94/W7N5sbx+o2bqS0lXXaXpB8V3thantoBk7Td/oBxY93ufiAibjJTEXETShzTBwKIeB+gR9ElIh5FGQMeRDcRD3hIHqQek4h3E9du69ZyPJ+s6cEcdJUCIu6KLO3mJICI5wRY2nCfRVxyc/SyUm5HuSUVyf/yOb10boh4/lpH0MIEK+IWRfxXzl4W1sNff/348ePJfyF5+umnX3rppQMHDtg6iyOYIY0hIOIxVTOqsSDiUZWzwMF4LuL7Dr9qC4Y0Jb/b5GXRdElPVx0pQYJO9EUqomuEqJgIKER8AveV1jL/VTz8+K+OW5FmaUSaOlZ9SbNW2myI+JYtW8bGxmQUeUr8oyP77F7x8iRjMRYRtwiTpmwSQMRt0ixTW56LuJTCZBOtyTHS1Ne//nW7Ik56unMlmXVJ1RZt+rJsJNC1Q1Q0BCyKuOy0FjnuJuLy/u5/fMnKlzT1s5/9zIWI/9vZ//zcJ0477+nfvuCZt6u/rF/xPJlsiLgnhSCNdgKIOHNCR6BUIj4yMuKziJcnvbSIT13zMVn8081eoqIhYFHE/+mf/gkRF32XuWH3kuLJZEPEPSkEaSDizAE7BBBxNce0TZosyU98jPXfmj6n15Lbkn/25N88rq4CgXEQsCji3falyAJ2sofEynK4NOL/ijgiHsfZwSjCIMCKeBh18i9LRFxdE59NVwblc3rtuX3lny3f8pW//8Hfs0dFPRtDD8wv4rIjRdbCJ7BwRDz0SZLkz4p4HHWMcBSIeIRFLWRIiLgas8+mG5iIVzeLTx3+2OJNjww/t0qeo8KrbASeffbZ5D8Z/fSnP5WN1z//+c/lr7Lv3N14HHjqm7u/I//U9kpumhQRn/CmyednVD8BqGNF/GvT6s1fs+zbLf+65dPNjr/4tbZAVsTVF888gYh4HnrEOiSAiDuEG3XTiLi6vIg46Ey2JAkluzsEfJ546tzOWFSxcPn6+x+/tPvQS7sPV+6nbJjud2fIx2tWPzcz1ytTxL/95Y99eji5ffOVOdece+60LfVbOSsWXv+nrPs7EXH1FSBPICKehx6xDgkg4g7hRt00Iq4ur9o5Mu0NXTORWtCF+N86TCprQ8Qn+ISfxN+7rYg3HqIiUn5ufVG88n1TyhFx9YXSdiAibpso7Vki4K+Ijw5eW3sNjtYHOz48rf7mtdOGxy0xoBkNAURcQ60ag4iDzkQx+RPLhFLPIp764PvqWnnq5+qHz6c/p76+mN4U8W3Lrj63Y6vJ7n+s7FGpy7d8f/WXt1TWyKuvjKVxVsTVV4A8gYh4HnrEOiTgq4iPDw/WRLsi5HUVFxHHvx3Ohl6aRsR7odVyLCIOOhPFRMRNKPUo4hXNrul15duqelfcO/mm5VUx9PqhXfaIJyvi6eXw2jaVcz82Z1t1LXz4i+c2vm/sFEfE1VeAPIGIeB56xDok4KuIN4dcWQVHxB1OAWXTiLgSHCvianCgy4HO8/8Uo/7rtDcRb1Huhmm3injGkvgEW1PSa+GJl1dXxF+p71qpbB9vXxRHxPNNZGU0Iq4ER5hrAt6LeNrDTzS2pky6Lr6Rl2MCa9eulcn56MCAlS9pasaMGQsWLJBm8yee5GaynGZyjN3cZHSkpy4x6NToPJ946sp2E/GDBw8ePnz423ede+5dW482XlvvOve65T+o/fiD5dcl/5h6t/JeLaLxz8kBXZ6aknLu2nZwWSCfXMST9OQxL83ccnx35MiR5FJm65M1Da/Grv3EbvuIuF2etGaNgN8int6Wkh5yRcgndXFrjGgoiwAr4up5oV78445D0KlnHSviyW2XXbampPerpLauTLg1RbadtD+1sOrilX3k6a0pPL4wz6y1F4uI22NJS1YJeCziYuHdZVv+sXkPp1UiNGZGABE345RxFDYJOsP/FMPjCycF1dvWlNabMxsPNqzdsNl6s+a9T8om8WRHeebNms2HiCd3ZaaflFLZGp686kaefpQ4W1PUV4A8gYh4HnrEOiTgq4hPsuY9oaQ7xEXTDQKIuHoyIOKgm9Qv5QChhIhPCmpiEU8+mj7/i4+4V5+z/gQi4v7UgkxaCPgq4s2HF1aeV1hf/M56pCEF7Q8BRFzNHREH3aR+iYibIJJjEHH5M+P48eN294jb/QtQfb7bDUTE7fKkNWsEfBVxawOkIUcEEHE1WEQcdCaWyYq4CSVEHBE3vJ4g4oagOKxoAoh40cRj6Q8RV1cSEQediWIi4iaUGiI+Or618yPuS7I15cdHf8SK+KRXFUR8UkQc0B8CiHh/uIffKyKuriEiDjoTxUTETSiJiCcuPu97s0or4mte+aoQ+D8WnvR7X/rNc5847bynf/uCZ96u/rI+8dTnu91ARNwuT1qzRgARt4ayZA0h4uqCI+KgM1FM6z7k88RT53bGVwbe8WhFxM978l99d//W3YcrDxC0/lgSn2/WPPTLg/9p9RlC4P/80q+LiL9v9b84fwMinnGNQcTVF14C3RJAxN3yjbd1RFxdW7Vz8Bxx0KlnnQT6TC9Pbu94bOAdC2su/thLg989sPW1116Tz7j55S9/KXcxyvf5X0k7Fcu38WUrvZ/84sfDP3g8sfCLnzzrd//qN97zld/6g6//S/VaeBJo/S/APJPWYiwibhEmTdkkgIjbpFmmthBxdbXzOEeni1v/relzej7n5rnpep5ensrK1pTf+euai5v8p4b4jvnDJ961+ImF71n8W+euzLsvBRFXX9gJhICSACKuBFf6MERcPQXyOAciLthtiVSp/oaJWMRlPrxj/sDvfGngd2YP/KsvV5bGy/P1p0+c85lVN69YseKll176/cdP+4N1eZfDEXH1hZ1ACCgJIOJKcKUPQ8TVUwARB52JKZbq74ScJ8UZS6ouLiL+4MA//9zAN7/5zQceeGDZsmVPP/30FhuvpJ3fnj5g5UuaspWejPTb3/726Ojoq6++KhZ+/sZcu8PZmqK+NBEIAT0BRFzPrtyRiLi6/jmdo83h0DUTqWV7fdwr4kl9ZY+K6Pi/njswNja2aNGib33rW7JOLN/nfyXtyAYYK1920ztw4IBYuGyIz7k1vBFu/ZKivlTaDWSPuF2etGaNACJuDWXJGkLE1QVHxEFn8seDdR/yeeJZzE2eoyJWumrVqu3bt4ukyvf5X0k7yaMS83/ZTU9uJE3oIeITX1gQcfWFl0C3BBBxt3zjbR0RV9fWonOIz6FrJlLLingZVsQbVS7VSdGoLCKOiKt/KxHYTwKIeD/ph9w3Iq6uHiIOOpM/Hkplk5wU6pMCETdEx4q4ISgOK5oAIl408Vj6Q8TVlcQ5QIeIt80BTgr1SYGIG6JDxA1BcVjRBBDxoonH0h8irq4kzgE6RBwRlxtAk0tB/hd7xE0YIuImlDimDwQQ8T5Aj6JLRFxdRkQcdIg4Io6Iq68DukBEXMeNKOcEEHHniCPtABFXFxYRBx0ijogj4urrgC4QEddxI8o5AUTcOeJIO0DE1YVFxEGHiCPiiLj6OqALRMR13IhyTgARd4440g4QcXVhEXHQIeKIOCKuvg7oAhFxHTeinBNAxJ0jjrQDRFxdWEQcdIg4Io6Iq68DukBEXMeNKOcEEHHniCPtABFXFxYRBx0ijogj4urrgC4QEddxI8o5AUTcOeJIO0DE1YVFxEGHiCPiiLj6OqALRMR13IhyTgARd4440g4QcXVhEXHQIeKIOCKuvg7oAhFxHTeinBNAxJ0jjrQDRFxdWEQcdIg4Io6Iq68DukBEXMeNKOcEEHHniCPtABFXFxYRBx0ijogj4urrgC4QEddxI8o5AUTcOeJIO0DE1YVFxEGHiCPiiLj6OqALRMR13IhyTgARd4440g4QcXVhEXHQIeKIOCKuvg7oAhFxHTeinBNAxJ0jjrQDRFxdWEQcdIg4Io6Iq68DukBEXMeNKOcEEHHniCPtABFXFxYRBx0ijogj4urrgC4QEddxI8o5AUTcOeJIO0DE1YVFxEGHiCPiiLj6OqALRMR13IhyTgARd4440g4QcXVhEXHQIeKIOCKuvg7oAhFxHTeinBNAxJ0jjrQDRFxdWEQcdIg4Io6Iq68DukBEXMeNKOcEEHHniCPtABFXFxYRBx0ijogj4urrgC4QEddxI8o5AUTcOeJIO0DE1YVFxEGHiCPiiLj6OqALRMR13IhyTgARd4440g4QcXVhEXHQIeKIOCKuvg7oAhFxHTeinBNAxJ0jjrQDRFxdWEQcdIg4Io6Iq68DukBEXMeNKOcEEHHniCPtABFXFxYRBx0ijogj4urrgC4QEddxI8o5AUTcOeJIO0DE1YVFxEGHiCPiiLj6OqALRMR13IhyTgARd4440g4QcXVhEXHQIeKIOCKuvg7oAhFxHTeinBNAxJ0jjrQDRFxdWEQcdIg4Io6Iq68DukBEXMeNKOcEEHHniCPtABFXFxYRBx0ijogj4urrgC4QEddxI8o5AUTcOeJIO0DE1YVFxEGHiCPiiLj6OqALRMR13IhyTgARd4440g4QcXVhEXHQIeKIOCKuvg7oAhFxHTeinBNAxJ0jjrQDRFxdWEQcdIg4Io6Iq68DukBEXMeNKOcEEHHniCPtABFXFxYRBx0ijogj4urrgC4QEddxI8o5AUTcOeJIO0DE1YVFxEGHiCPiiLj6OqALRMR13IhyTsBfER8dvLb2GhxtYmi8m37TOSU66CSAiKtnBSIOOkQcEUfE1dcBXSAiruNGlHMCvor4+PDg8Hh19BX1rln3+PC02reV76bVDnDOiA6yCCDi6nmBiIMOEUfEEXH1dUAXiIjruBHlnICvIt4ceKt9NxbCxc8xcefTY4IOEHE1fUQcdIg4Io6Iq68DukBEXMeNKOcEvBfxpodX1sab7p16PwvSRl6OCaxdu1bAPzowYOVLmpoxY8aCBQuk2fyJJ7mZuI7JMXZzk9GRnrrEoFOj83ziUdn8lb3gmbdb+TK/4jkXFKsdIOJWcdKYPQJ+i3hqW4oMuRcRt0eIlrIJsCKunhmsiIPO8C/AkZER6+umJl2bHCNFtJgeJ4X6pJDAhJ4VC5dG7FY2z7jsxiLidnnSmjUCHot4x+aTlkVwtqZYmwO6hhBxHbfGb00T1zE5xvpvTZ+VyOfcqKz6jABdHnSIuCE9RNwQFIcVTcBXEc+8G5ObNYueHhP0h4iri4FNgo4/sdrmACeF+qRAxA3RIeKGoDisaAK+injz4YWVZxg2n1XI4wuLniHd+kPE1ZXAOUCHiCPi1jcdsTVl4gsLIq6+8BLoloCvIu521LSenwAirmaIiIMOEUfEEXH1dUAXiIjruBHlnAAi7hxxpB0g4urCIuKgQ8QRcURcfR3QBSLiOm5EOSeAiDtHHGkHiLi6sIg46BBxRBwRV18HdIGIuI4bUc4JIOLOEUfaASKuLiwiDjpEHBFHxNXXAV0gIq7jRpRzAoi4c8SRdoCIqwuLiIMOEUfEEXH1dUAXiIjruBHlnAAi7hxxpB0g4urCIuKgQ8QRcURcfR3QBSLiOm5EOSeAiDtHHGkHiLi6sIg46BBxRBwRV18HdIGIuI4bUc4JIOLOEUfaASKuLiwiDjpEHBFHxNXXAV0gIq7jRpRzAoi4c8SRdoCIqwuLiIMOEUfEEXH1dUAXiIjruBHlnAAi7hxxpB0g4urCIuKgQ8QRcURcfR3QBSLiOm5EOSeAiDtHHGkHiLi6sIg46BBxRBwRV18HdIGIuI4bUc4JIOLOEUfaASKuLiwiDjpEHBFHxNXXAV0gIq7jRpRzAoi4c8SRdoCIqwuLiIMOEUfEEXH1dUAXiIjruBHlnAAi7hxxpB0g4urCIuKgQ8QRcURcfR3QBSLiOm5EOSeAiDtHHGkHiLi6sIg46BBxRBwRV18HdIGIuI4bUc4JIOLOEUfaASKuLiwiDjpEHBFHxNXXAV0gIq7jRpRzAoi4c8SRdoCIqwuLiIMOEUfEEXH1dUAXiIjruBHlnAAi7hxxpB0g4urCIuKgQ8QRcURcfR3QBSLiOm5EOSeAiDtHHGkHiLi6sIg46BBxRBwRV18HdIGIuI4bUc4JIOLOEUfaASKuLiwiDjpEHBFHxNXXAV0gIq7jRpRzAoi4c8SRdoCIqwuLiIMOEUfEEXH1dUAXiIjruBHlnAAi7hxxpB0g4urCIuKgQ8QRcURcfR3QBSLiOm5EOSeAiDtHHGkHiLi6sIg46BBxRBwRV18HdIGIuI4bUc4JIOLOEUfaASKuLiwiDjpEHBFHxNXXAV0gIq7jRpRzAoi4c8SRdoCIqwuLiIMOEUfEEXH1dUAXiIjruBHlnAAi7hxxpB0g4urCIuKgQ8QRcURcfR3QBSLiOm5EOSeAiDtHHGkHiLi6sIg46BBxRBwRV18HdIGIuI4bUc4JIOLOEUfaASKuLiwiDjpEHBFHxNXXAV0gIq7jRpRzAoi4c8SRdoCIqwuLiIMOEUfEEXH1dUAXiIjruBHlnEAhIn5w3eDw85WhyDfzrv/ivL8cPuh8YHTgmAAirgaMiIMOEUfEEXH1dUAXiIjruBHlnEAhIr5rzuCz+06c2Df81esXDs/5orh44uW8AiaAiKuLh4iDDhFHxBFx9XVAF4iI67gR5ZxAQSJeMe/qcvjCXSdO7JqDiDsvrPMOEHE1YkQcdIg4Io6Iq68DukBEXMeNKOcEihLxyo6U6xc+u08Wxp8fvr66QM4raAKIuLp8iDjoEHFEHBFXXwd0gYi4jhtRzgkUIuLVTSkVEZflcETceU2L6QARV3NGxEGHiCPiiLj6OqALRMR13IhyTqAYEXc+DDoonAAirkaOiIMOEUfEEXH1dUAXiIjruBHlnEAhIl67WdP5YOigQAKIuBo2Ig46RBwRR8TV1wFdICKu40aUcwKIuHPEkXaAiKsLi4iDDhFHxBFx9XVAF4iI67gR5ZxAISJeeV4Kzw53XstiO0DE1bwRcdAh4og4Iq6+DugCEXEdN6KcEyhExOV5hdWnpjS/eI6488q67gARVxNGxEGHiCPiiLj6OqALRMR13IhyTgARd4440g4QcXVhEXHQIeKIOCKuvg7oAhFxHTeinBMoRMSdj4IOiieAiKuZI+KgQ8QRcURcfR3QBSLiOm5EOSeAiDtHHGkHiLi6sIg46BBxRBwRV18HdIGIuI4bUc4JFCLi7BF3XsfiO0DE1cwRcdAh4og4Iq6+DugCEXEdN6KcE0DEnSOOtANEXF1YRBx0iDgijoirrwO6QERcx40o5wQKEfGWUTy/cN71g8/um3Rko4PXVl6Do6kjx4enVd+svKYNj0/aBge4I4CIq9ki4qBDxBFxRFx9HdAFIuI6bkQ5J1C8iJ84ITtVzB5fWPHudhHHv53PCbMOEHEzThlHIeKgQ8QRcURcfR3QBSLiOm5EOSdQiIhr94gj4s7rr+8AEVezQ8RBh4gj4oi4+jqgC0TEddyIck6gLyJu+imbWSJuuC9lIy/HBNauXSuz89GBAStf0tSMGTMWLFggzeZPPMnNxHVMjrGbm4yO9ExKPDo62nkY6EzQdTvGZ3o+5xbKOXvBM2+38mV+xXMuKFY7QMSt4qQxewQKEXFtuh0iXm+o8g/sUdFitRPHiriaIyvioDP8C3BkZMT6uqlJ1ybHSBEtpsdJoT4pJDChZ8XCpRG7lc0zLruxiLhdnrRmjUCYIn7ihNzK2bJ73BoQGjIkgIgbguo8DOcAXfGm29A1k65NjrGra5wU6pMCETdEh4gbguKwogkUJeLpbeJmd2oKia4r4hUPZ0W86LnS2h8iruaPc4CueNNFxNWzznN0iLhhZRFxQ1AcVjSBQkT84LrBedd/MfVl8vjCLBGvPdKw/amGRUOjv8al38oGcWmE1TUTM8s8xi46z52Dv2HyXHx8pudzbp6fFIi44UmBiBuC4rCiCRQi4rvmDH513fP1oT0/bPQc8aJJ0F9vBFgR741X6micA3Qmf3fxJ5YJJf46RcQNryeIuCEoDiuaACJeNPFY+kPE1ZVExEFnopiIuAklRBwRN7yeIOKGoDisaAKFiLh2a0rRMOivBwKIeA+wWg9FxEFnopiIuAklRBwRN7yeIOKGoDisaAKFiLgMSnWzZtEw6K8HAoh4D7AQ8ZdeSiZMzhd/w+QB6DM9n3NrmK76D4O2QEd/YvH4wonPDkQ8z9WDWIcEihJxh0Og6b4QQMTV2HEO0JkonSNdM+na5Bi76XFSqE8KVsQN0SHihqA4rGgCiHjRxGPpDxFXVxLnAF3xpuv5si4nhfqkQMQN0SHihqA4rGgCLkU8vR2l9fGFXzR+lHjRPOjPlAAibkqq4zicA3SIeNsc4KRQnxSIuCE6RNwQFIcVTQARL5p4LP0h4upK4hygQ8QR8Zcs3TiBiBteTxBxQ1AcVjQBlyKeGsu+Z/9y4a6ix0Z/Lgkg4mq6iDjoEHFEHBFXXwd0gYi4jhtRzgkg4s4RR9oBIq4uLCIOOkQcEUfE1dcBXSAiruNGlHMCiLhzxJF2gIirC4uIgw4RR8QRcfV1QBeIiOu4EeWcACLuHHGkHSDi6sIi4qBDxBFxRFx9HdAFIuI6bkQ5J+BSxHlqivPy9bEDRFwNHxEHHSKOiCPi6uuALhAR13EjyjkBRNw54kg7QMTVhUXEQYeII+KIuPo6oAtExHXciHJOwKWIO0+eDvpIABFXw0fEQYeII+KIuPo6oAtExHXciHJOABF3jjjSDhBxdWERcdAh4og4Iq6+DugCEXEdN6KcE0DEnSOOtANEXF1YRBx0iDgijoirrwO6QERcx40o5wQQceeII+0AEVcXFhEHHSKOiCPi6uuALhAR13EjyjkBRNw54kg7QMTVhUXEQYeII+KIuPo6oAtExHXciHJOABF3jjjSDhBxdWERcdAh4og4Iq6+DugCEXEdN6KcE0DEnSOOtANEXF1YRBx0iDgijoirrwO6QERcx40o5wQQceeII+0AEVcXFhEHHSKOiCPi6uuALhAR13EjyjkBRNw54kg7QMTVhUXEQYeII+KIuPo6oAtExHXciHJOABF3jjjSDhBxdWERcdAh4og4Iq6+DugCEXEdN6KcE0DEnSOOtANEXF1YRBx0iDgijoirrwO6QERcx40o5wQQceeII+0AEVcXFhEHHSKOiCPi6uuALhAR13EjyjkBRNw54kg7QMTVhUXEQYeII+KIuPo6oAtExHXciHJOABF3jjjSDhBxdWERcdAh4og4Iq6+DugCEXEdN6KcE0DEnSOOtANEXF1YRBx0iDgijoirrwO6QERcx40o5wQQceeII+0AEVcXFhEHHSKOiCPi6uuALhAR13EjyjkBRNw54kg7QMTVhUXEQYeII+KIuPo6oAtExHXciHJOABF3jjjSDhBxdWERcdAh4og4Iq6+DugCEXEdN6KcE0DEnSOOtANEXF1YRBx0iDgijoirrwO6QERcx40o5wQQceeII+0AEVcXFhEHHSKOiCPi6uuALhAR13EjyjkBRNw54kg7QMTVhUXEQYeII+KIuPo6oAtExHXciHJOABF3jjjSDhBxdWERcdAh4og4Iq6+DugCEXEdN6KcE0DEnSOOtANEXF1YRBx0iDgijoirrwO6QERcx40o5wQQceeII+0AEVcXFhEHHSKOiCPi6uuALhAR13EjyjkBRNw54kg7QMTVhUXEQYeII+KIuPo6oAtExHXciHJOABF3jjjSDhBxdWERcdAh4og4Iq6+DugCEXEdN6KcE0DEnSOOtANEXF1YRBx0iDgijoirrwO6QERcx40o5wQQceeII+0AEVcXFhEHHSKOiCPi6uuALhAR13EjyjkBRNw54kg7QMTVhUXEQYeII+KIuPo6oAtExHXciHJOABF3jjjSDhBxdWERcdAh4og4Iq6+DugCEXEdN6KcE/BXxEcHr628BkdbGNTe7XjfOSg6yPzF+ejAgJUvaXxkZMTWbyZMN8909Zmez7kJc9JTTzzQqdE1Jt4Fz7zdypfdq3GecdmNRcTt8qQ1awT8FXEZ4vjwtBYRb/5c+W7a8Lg1DDTUMwFWxHtGVg/AOUDHijgr4rbWHRBxw+sJIm4IisOKJhCSiLd4uSyNY+JFz5Z0f4i4mj4iDjpEHBFHxNXXAV0gIq7jRpRzAiGJeIt7t6+Wt5HayMsxgbVr1wpzK/tSpBFpasaMGQsWLJBm8yee5GbiOibH2M1NRkd6JiUeHR3tPAx0Jui6HeMzPZ9zC+WctbIvRRoxv+I5FxSrHSDiVnHSmD0CsYq4PUK0lE2AFXH1zGBFHHSGfwFavHGisYHBpGuTY6RBi+lxUqhPikZlLYq4xcrmGZfdWETcLk9as0YgJBFna4q1sltoCBFXQ8Q5QFe86SLi6lnnOTpE3LCyiLghKA4rmkBIIp66eZObNYueKB39IeLqEiDioEPE2+YAJ4X6pEDEDdEh4oagOKxoAkGJuMDh8YVFz5Bu/SHi6krgHKBDxBFxbtZUXwd0gYi4jhtRzgl4LeLOR08HegKIuJodIg46RBwRR8TV1wFdICKu40aUcwKIuHPEkXaAiKsLi4iDDhFHxBFx9XVAF4iI67gR5ZwAIu4ccaQdIOLqwiLioEPEEXFEXH0d0AUi4jpuRDkngIg7RxxpB4i4urCIOOgQcUQcEVdfB3SBiLiOG1HOCSDizhFH2gEiri4sIg46RBwRR8TV1wFdICKu40aUcwKIuHPEkXaAiKsLi4iDDhFHxBFx9XVAF4iI67gR5ZwAIu4ccaQdIOLqwiLioEPEEXFEXH0d0AUi4jpuRDkngIg7RxxpB4i4urCIOOgQcUQcEVdfB3SBiLiOG1HOCSDizhFH2gEiri4sIg46RBwRR8TV1wFdICKu40aUcwKIuHPEkXaAiKsLi4iDDhFHxBFx9XVAF4iI67gR5ZwAIu4ccaQdIOLqwiLioEPEEXFEXH0d0AUi4jpuRDkngIg7RxxpB4i4urCIOOgQcUQcEVdfB3SBiLiOG1HOCSDizhFH2gEiri4sIg46RBwRR8TV1wFdICKu40aUcwKIuHPEkXaAiKsLi4iDDhFHxBFx9XVAF4iI67gR5ZwAIu4ccaQdIOLqwiLioEPEEXFEXH0d0AUi4jpuRDkngIg7RxxpB4i4urCIOOgQcUQcEVdfB3SBiLiOG1HOCSDizhFH2gEiri4sIg46RBwRR8TV1wFdICKu40aUcwKIuHPEkXaAiKsLi4iDDhFHxBFx9XVAF4iI67gR5ZwAIu4ccaQdIOLqwiLioEPEEXFEXH0d0AUi4jpuRDkngIg7RxxpB4i4urCIOOgQcUQcEVdfB3SBiLiOG1HOCSDizhFH2gEiri4sIg46RBwRR8TV1wFdICKu40aUcwKIuHPEkXaAiKsLi4iDDhFHxBFx9XVAF4iI67gR5ZwAIu4ccaQdIOLqwiLioEPEEXFEXH0d0AUi4jpuRDkngIg7RxxpB4i4urCIOOgQcUQcEVdfB3SBiLiOG1HOCSDizhFH2gEiri4sIg46RBwRR8TV1wFdICKu40aUcwKIuHPEkXaAiKsLi4iDDhFHxBFx9XVAF4iI67gR5ZwAIu4ccaQdIOLqwiLioEPEEXFEXH0d0AUi4jpuRDkngIg7RxxpB4i4urCIOOgQcUQcEVdfB3SBiLiOG1HOCSDizhFH2gEiri4sIg46RBwRR8TV1wFdICKu40aUcwKIuHPEkXaAiKsLi4iDDhFHxBFx9XVAF4iI67gR5ZwAIu4ccaQdIOLqwiLioEPEEXFEXH0d0AUi4jpuRDkngIg7RxxpB4i4urCIOOgQcUQcEVdfB3SBiLiOG1HOCSDizhFH2gEiri4sIg46RBwRR8TV1wFdICKu40aUcwKIuHPEkXaAiKsLi4iDDhFHxBFx9XVAF4iI67gR5ZwAIu4ccaQdIOLqwiLioEPEEXFEXH0d0AUi4jpuRDkngIg7RxxpB4i4urCIOOgQcUQcEVdfB3SBiLiOG1HOCSDizhFH2gEiri4sIg46RBwRR8TV1wFdICKu40aUcwKIuHPEkXaAiKsLi4iDDhFHxBFx9XVAF4iI67gR5ZwAIu4ccaQdIOLqwiLioEPEEXFEXH0d0AUi4jpuRDkngIg7RxxpB4i4urCIOOgQcUQcEVdfB3SBiLiOG1HOCSDizhFH2gEiri4sIg46RBwRR8TV1wFdICKu40aUcwKIuHPEkXaAiKsLi4iDDhFHxBFx9XVAF4iI67gR5ZwAIu4ccaQdIOLqwiLioEPEEXFEXH0d0AUi4jpuRDkngIg7RxxpB4i4urCIOOgQcUQcEVdfB3SBiLiOG1HOCSDizhFH2gEiri4sIg46RBwRR8TV1wFdICKu40aUcwJhifj48LRr669pw+PO6dBBdwKIuHp2IOKgQ8QRcURcfR3QBSLiOm5EOScQnIjj387nhFkHiLgZp4yjEHHQIeKIOCKuvg7oAhFxHTeinBNAxJ0jjrQDRFxdWEQcdIg4Io6Iq68DukBEXMeNKOcEghPxZGfKpOviG3k5JrB27VqZnY8ODFj5kqZmzJixYMECaTZ/4kluJq5jcozd3GR0pGdS4tHR0c7DQGeCrtsxPtPzObdQztkLnnm7lS/zK55zQbHaASJuFSeN2SMQlojXx13ZKz6pi9uDREtd91dYsXBpRDoYGRmxtUTEknOeKeszPZ9zE+akp554oFOja0w8KxYujdi9GucZl91YRNwuT1qzRiBMET9xYnTw2sFRaxRoqHcCbE3pnVktAucAneF/irH416nnfydwUqhPCkTcEB0ibgiKw4omEKiIi4ezIl70XGntDxFX88c5QIeIt80BTgr1SYGIG6JDxA1BcVjRBMIScfHv2ovl8KJnSnt/iLi6AjgH6BBxRNzWTjxE3PB6gogbguKwogmEJeJF06G/7gQQcfXsQMRBh4gj4oi4+jqgC0TEddyIck4AEXeOONIOEHF1YRFx0CHiiDgirr4O6AIRcR03opwTQMSdI460A0RcXVhEHHSIOCKOiKuvA7pARFzHjSjnBBBx54gj7QARVxcWEQcdIo6II+Lq64AuEBHXcSPKOQFE3DniSDtAxNWFRcRBh4gj4oi4+jqgC0TEddyIck4AEXeOONIOEHF1YRFx0CHiiDgirr4O6AIRcR03opwTQMSdI460A0RcXVhEHHSIOCKOiKuvA7pARFzHjSjnBBBx54gj7QARVxcWEQcdIo6II+Lq64AuEBHXcSPKOQFE3DniSDtAxNWFRcRBh4gj4oi4+jqgC0TEddyIck4AEXeOONIOEHF1YRFx0CHiiDgirr4O6AIRcR03opwTQMSdI460A0RcXVhEHHSIOCKOiKuvA7pARFzHjSjnBBBx54gj7QARVxcWEQcdIo6II+Lq64AuEBHXcSPKOQFE3DniSDtAxNWFRcRBh4gj4oi4+jqgC0TEddyIck4AEXeOONIOEHF1YRFx0CHiiDgirr4O6AIRcR03opwTQMSdI460A0RcXVhEHHSIOCKOiKuvA7pARFzHjSjnBBBx54gj7QARVxcWEQcdIo6II+Lq64AuEBHXcSPKOQFE3DniSDtAxNWFRcRBh4gj4oi4+jqgC0TEddyIck4AEXeOONIOEHF1YRFx0CHiiDgirr4O6AIRcR03opwTQMSdI460A0RcXVhEHHSIOCKOiKuvA7pARFzHjSjnBBBx54gj7QARVxcWEQcdIo6II+Lq64AuEBHXcSPKOQFE3DniSDtAxNWFRcRBh4gj4oi4+jqgC0TEddyIck4AEXeOONIOEHF1YRFx0CHiiDgirr4O6AIRcR03opwTQMSdI460A0RcXVhEHHSIOCKOiKuvA7pARFzHjSjnBBBx54gj7QARVxcWEQcdIo6II+Lq64AuEBHXcSPKOQFE3DniSDtAxNWFRcRBh4gj4oi4+jqgC0TEddyIck4AEXeOONIOEHF1YRFx0CHiiDgirr4O6AIRcR03opwTQMSdI460A0RcXVhEHHSIOCKOiKuvA7pARFzHjSjnBBBx54gj7QARVxcWEQcdIo6II+Lq64AuEBHXcSPKOQFE3DniSDtAxNWFRcRBh4gj4oi4+jqgC0TEddyIck4AEXeOONIOEHF1YRFx0CHiiDgirr4O6AIRcR03opwTQMSdI460A0RcXVhEHHSIOCKOiKuvA7pARFzHjSjnBBBx54gj7QARVxcWEQcdIo6II+Lq64AuEBHXcSPKOQFE3DniSDtAxNWFRcRBh4gj4oi4+jqgC0TEddyIck4AEXeOONIOEHF1YRFx0CHiiDgirr4O6AIRcR03opwTQMSdI460A0RcXVhEHHSIOCKOiKuvA7pARFzHjSjnBBBx54gj7QARVxcWEQcdIo6II+Lq64AuEBHXcSPKOQFE3DniSDtAxNWFRcRBh4gj4oi4+jqgC0TEddyIck4AEXeOONIOEHF1YRFx0CHiiDgirr4O6AIRcR03opwTQMSdI460A0RcXVhEHHSIOCKOiKuvA7pARFzHjSjnBBBx54gj7QARVxcWEQcdIo6II+Lq64AuEBHXcSPKOQFE3DniSDtAxNWFRcRBh4gj4oi4+jqgC0TEddyIck4AEXeOONIOEHF1YRFx0CHiiDgirr4O6AIRcR03opwTQMSdI460A0RcXVhEHHSIOCKOiKuvA7pARFzHjSjnBBDxCRAfOnTopptues973jMwMPD+97//iSeecF6PXjoYHR29/PLL31Z9yTfyYy/ReY+dVMT/58DA7wm4gYF3DAz8ycDAlwYGHu3+JdmMjIzY+s00qem+Y97AWy4Z+PV3VtI75eyBf3HrwARiZDc3aW3S9E6fMfAb/2HgpDdXvuQb+dGr9H7r4xVo8hKAglFgFpbepOio7AQn9qT0qGw3epOi8+GcveCZt3f7+jf/661vee+vyzn7G+86+e1XvPk/rP2XExxs/YqX95eNpXhE3BJImrFNIDQRHx28NnkNFmCd55xzTtUkm6/PfvaztiugbG/Pnj3i3+nc5Ed5U9lc72ETi/jlbeCqOu6PiP/6Ge35ve2/dbVJ67+WJv6l/juzKv6dfsmP8mY32S04PQHV9hId90fEqaxaxKmsGp0n52w3t/6dq3+z7ZwVHUfEe/+lRwQE3BAISsTHh6fVBLzy3bThcTdMklbnzZvXIZMDIrv79u37pQev//Jf/ktnevJmwak9PDDQ+fWgrLt0Jjcw8N+zDk7CJe2nn376+9//vsX8z1g0kPl16kczkjvpNwb+9Zzs413kJm12S+9N52akJ292O77I9ASRgOp8CdIi06OyeU6TTHpU1gSp5+fseU//dufXuU/+izf85j/rPGdljbybi8uvv2eeeWZsbMzlL9g+tM2KeB+g06UJgZBEvOnhMjJZGndr4jfeeGOWTPIeBCAAAQhAIGwC8guumyH86Mi+l19+2cQfwjoGEQ+rXiXKNiQRb3HvFivvLNjG776S8+v//vNrMi+0D8xdkrNlK+G/OeUtnenJm1Yaz9mIIMpEJ0hztmwlnMqqMRZZ2WdGd/WaJ5XtlVjj+CIrq0iSyiqgJSFOKxuWKiHiYdWrRNnGKuL5S5i5NeWtb32r3MGZs3G5OOZsQcIvu+yyTtmVN3O2bCU3QSSgOtMTpD6kR2XVVaCyanScs3nQcc6q6Xl+zqrHpQhExBXQCCmCQEgiXuzWFKHv6GZNK7Ir92W2ya78mP9mTSu5CTq5q7VNxAVm/gltKz0qq64FlVWj45xVo+NqnAed5+dsnqH1FIuI94SLg4sjEJKInyj0Zk2pgawlyEa6RNr+8A//0NbjC23ZpDyvUJbAxb/lJd9YeXyhrdyEnixiCTRBJwAFY/7/kiBt2kqPyua5xFBZNT3OWTU6zlk1Os+vxnnG1VMsIt4TLg4ujkBQIi5YCn18oaMy2LJJF+n5nJtFEXeBzvP0qGyeovtMz+fcPD8pPE+PyuY5ZztjEXG7PGnNGoHQRNzawGkIAhCAAAQgAIGSEEDES1Lo8IaJiIdXMzKGAAQgAAEIQKAXAoh4L7Q4tkACiHiBsOkKAhCAAAQgAIE+EEDE+wCdLk0IIOImlDgGAhCAAAQgAIFwCSDi4dYu8swR8cgLzPAgAAEIQAACpSeAiJd+CvgKABH3tTLkBQEIQAACEICAHQKIuB2OtGKdACJuHSkNQgACEIAABCDgFQFE3KtykEyTACLObIAABCAAAQhAIG4CiHjc9Q14dIh4wMUjdQhAAAIQgAAEDAgg4gaQOKQfBBDxflCnTwhAAAIQgAAEiiOAiBfHmp56IoCIt+AaHby28hocPXFifHha9ftpw+M9EXV5MOmp6YJOjU4Cfabnc26eo/M8PSob6zmbZ1w5YhHxHPAIdUkAEU/RFfeuKLh4x/DgYO1bec8XFSc99ZkAOjU6CfSZns+5eY7O8/SobKznbJ5x5YpFxHPhI9gdAUQ8xXZ0sO7cshaTKHnKQtwVwbBl0jME1XkY6NToKn+Xenxe+Jyb5+g8T4/KxnrO5hlXrlhEPBc+gt0RQMQzRbyxGuOniJNej2dE85c66HpE16Jr/tGjsr3XsxnhMz2fc/P8pPA/vTyTVh+LiOvZEemUACKextu89jfeTa2NOy2ESeOkZ0Ip8xjQqdG1/Fb377ygslQ2DwF1LBNPja5fgYh4v8jT7yQEEHGmCAQgAAEIQAACcRNAxOOub8CjQ8QDLh6pQwACEIAABCBgQAARN4DEIf0ggIj3gzp9QgACEIAABCBQHAFEvDjW9NQTAUS8J1wcDAEIQAACEIBAcAQQ8eBKVpaEEfFUpWsfIFH9HJ/0q/4kwz5PCtJTFwB0anQS6DM9n3PzHJ3n6VHZWM/ZPOPKFYuI58JHsDsCiHiK7fjwoEcfo9lRdNJTnwegU6OTQJ/p+Zyb5+g8T4/KxnrO5hlXrlhEPBc+gt0RQMTdsaVlCEAAAhCAAAR8IICI+1AFcsgggIgzLSAAAQhAAAIQiJsAIh53fQMeHSIecPFIHQIQgAAEIAABAwKIuAEkDukHAUS8jbp8iHf6Ps1pnm0aJz31WQI6NToJ9Jmez7l5js7z9KhsrOdsnnGpYxFxNToC3RJAxNN85Ub9NvOu/Cbw5KEp1adXkJ7ufACdjlsS5TM9n3PzHJ3n6VHZWM/ZPOPKE4uI56FHrEMCiHgK7uhgxgK4qLgnJk566hMBdGp0VVvz97zwOTfP0XmeHpWN9ZzNM65csYh4LnwEuyOAiLetiLdLtyzLeOLh1YVJ0tOdC6DTcWusiHs78agslc1DQB3LxFOj61cgIt4v8vQ7CQFEvA1Q+8dIeGPhDSXy8bOG6hB9pudzbtXFSS8/RYrK5v4dQmXVCEGnRuf/JSXP0HSxiLiOG1HOCSDizhHTAQQgAAEIQAACfSWAiPcVP513J4CIMzsgAAEIQAACEIibACIed30DHh0i3lK8+uOyUjen+XOzZvMZcqTX8ylHZXtGlgrwmZ7PuQlC0lNPPNCp0fk/8fIMTRuLiGvJEeeYACLeqhs1xZVfAXXZ9UfEm0mRXo+nBeh6BNb+56m35wWVpbJ5CKhjmXhqdH0LRMT7hp6OJyaAiKf4tDwwqy7g/og46anPZtCp0Umgz/R8zs1zdJ6nR2VjPWfzjCtXLCKeCx/B7ggg4t1EvP5rylMRJ71eTor2ZxJXf6ayhgh9pudzbu2myzlrOOGqh1HZXmi1H+s5vTxD08ci4np2RDolgIin8XY8GjbZpejLIwxJT30ugE6NrupEbeeAR+eFz7l5js7z9KhsrOdsnnHliUXE89Aj1iEBRNwhXJqGAAQgAAEIQMADAoi4B0UghSwCiDjzAgIQgAAEIACBuAkg4nHXN+DRIeKp4iWf4+bLRpSOWUV66hMNdGp0EugzPZ9z8xyd5+lR2VjP2TzjyhWLiOfCR7A7Aoh4F99NPm/cQylPf+oz6fV0ZoCuJ1xtB/tMz+fcGr7LJUUx/aisAlojxHN6eYamiUXENdSIKYAAIj4hZM8vZKSnPkVAp0bnuVlSWSqbh4A6lomnRldQICJeEGi66ZUAIt4rMY6HAAQgAAEIQCAsAoh4WPUqUbaIeImKzVAhAAEIQAACpSSAiJey7CEMGhHvXqX2z0QIoZ7kCAEIQAACBRPgl0XBwDXdIeIaasQUQAART0FOb/JL7qzy6v6q9LU++UQVr24nlZTk4yqrOJsgPbmdtJqQJ7lkndW1clYzrJe2DrOAq4BBF63nhl+5NU6G5JTwKzkDtv08JGO2efOJs7U5Vzkr/Dsp+GXRz2mr6xsR13EjyjkBRLwFceXq2vA13xY5mvk0P3Ou49PnnM+Yrh000pOc6i6UkvP+JZb8ZTA42lLcvqbT3nldfQTh4OC02gz0aPqlZtnoYN2LPPHd1GyrYa1Im8d/dPk085rnZ+pM9UTEG2mMDstJkRTUl+tJY7mBXxY+TefJckHEJyPEv/eJACKeIUU1j/TIhGoX/pr7pO3bk9+aVdltpNd0NE/SaxCryLgnBpmaeC1/YqX+iPFEJ1tOhPoPnpwdmWl4MuuSvwAzXz5Wtk7NE3pZ6w4VE/cEXfX0rfzNl5yvnpwOjYtKelmkQcwzeoU7DyJeOHI6NCOAiGdxSq6vw3WzNEPp/CifTbf+W6l6zc/8Feocz0QdtPyHg+Q/c3v2+7wGrrmzwqPFv3QqDZK+/FLP+G9CHv1novHhwdp2rb7O/26dt+tj9WdPKtvMLZWQJ7mlefLLwsupnZUUIh5MqcqWKCLe/XeUb2unqdW15qKuZysxbSuAvthutq15ZOM1bpW6NhD6Aq9yhjSSasw8jyZe+7KzT+A8/4XScWJ49Fdqxgzz6E+slsL69x/aQvhlUfi5gYgXjpwOzQgg4macOAoCEIAABCAAgVAJIOKhVi76vBHx6EvMACEAAQhAAAIlJ4CIl3wC+Dt8RDxVm+Q/53n7H7ZJT30egU6NrrEvxdvzIs/QiIUABMpCABEvS6WDGyci3lGy9I5TD+WD9NQnGejU6Bo67tvT6/OMiFgIQKBEBBDxEhU7rKEi4hPWC3XLM519pudzbv5brz/0vH8+oOePL/Q3PSpr69rr4YfT5RmaPhYR17Mj0ikBRNwpXhqHAARcEvD8+YCkpy4+6NToJNBzenmGpo9FxPXsiHRKABF3ipfGIQABCEAAAhDoOwFEvO8lIIFsAog4MwMCEIAABCAAgbgJIOJx1zfg0SHiLcWr7Uus3KOZfLKFXx/qQ3rqUw10anQS6Dm9PEMjFgIQKAcBRLwcdQ5wlIh4qmiNz08eHR4cnJY8McWvTxpPciK9Xs80KtsrsfTxPtPjwZR5KuszPZ9za/xt6uFjtZL54Dm9PJNWH4uI69kR6ZQAIp7C2/xM5dRHKTcsxGkdTBonPRNKmceATo2u+ku9/sH2Xp4XDe3w9tGK/jxkpsvZ0Xyuhm9mCbp8Z66/lc0zLmUsIq4ER5hrAoh4poin7NtHESe9Hs+LpkqCrkd0LSLuJb22AaFuvVe4GeEzPZ9z46/BPLOuoFhEvCDQdNMrAUQ8Tazpa413U2uAvbK1fjzpqZGCTo2uxcS9PC/yDI1YCECgJAQQ8ZIUOrxhIuLh1YyMIQABCEAAAhDohQAi3gstji2QACJeIGy6ggAEIAABCECgDwQQ8T5Ap0sTAoi4CSWOgQAEPCXg+aMVSU89b0CnRieBntPLMzRtLCKuJUecYwKIuGPANA8BCLgj4POjFWXUpKcuPejU6PyfeHmGpo9FxPXsiHRKABF3ipfGIQABlwQ8f7Qi6amLDzo1uup6uO+PHM0zOmUsIq4ER5hrAuYi/vrrr7tOhvYhAAEI9EKAB1P2Qqv9WJ/p+Zxbi+l6+UzP/tPzUBgQ8TwXC2IdEkDEHcKlaQhAwDEBHkyZB7DP9HzOrcXEGwXgWbepuYiI5zkxiS0XAXMRFy4enlrlqhajhQAEIAABCPhNwE9VYEXc71lT4ux6EvHExf08x0pcQ4YOAQhAAAIQ6D8Bnw0BEe///CCDTAK9ijgYIQABCEAAAhCAQFgEEPGw6lWibBHxEhWboUIAAhCAAARKSQARL2XZQxg0Ih5ClcgRAhCAAAQgAAE9AURcz45IpwQQcad4aRwCEIAABCAAgb4TQMT7XgISyCaAiDMzIAABCEAAAhCImwAiHnd9Ax4dIh5w8UgdAhCAAAQgAAEDAoi4ASQO6QcBRLwf1OkTAhCAAAQgAIHiCCDixbGmp54IIOI94eJgCEAAAhCAAASCI4CIB1eysiSMiJel0owTAhCAAAQgUFYCiHhZK+/9uBFx70tEghCAAAQgAAEI5CKAiOfCR7A7Aoi4O7a0DAEIQAACEICADwQQcR+qQA4ZBBBxpgUEIAABCEAAAnETQMTjrm/Ao0PEAy4eqUMAAhCAAAQgYEAAETeAxCH9IICI94M6fUIAAhCAAAQgUBwBRLw41vTUEwFEvCdcHAwBCEAAAhCAQHAEEPHgSlaWhBHxslSacUIAAhCAAATKSgARL2vlvR83Iu59iUgQAhCAAAQgAIFcBBDxXPgIdkcAEXfHlpYhAAEIQAACEPCBACLuQxXIIYMAIs60gAAEIAABCEAgbgKIeNz1DXh0vYn4vrW3XNrtNeuFgDGQOgQgAAEIQAAC0RJAxKMtbegDsyfiVUHHxkOfEOQPAQhAAAIQiI4AIh5dSWMZkGURR8VjmRiMAwIQgAAEIBANAUQ8mlLGNhC9iDcXv1+YldqucsvafbExYjwQgAAEIAABCIRMABEPuXpR525DxE+0bB1nd0rUE4bBQQACEIAABIIjgIgHV7KyJGxdxBsenrLzllXytLVnrqpX3mwclISm1tyrIS3m37YGn6vfdE+XXsrqfllOA8YJAQhAAAJRE0DEoy5vyIOzIOJpK06pq16I16aezZIh4i07YWqbYlLL8Hb6bWy2YYE/5OlN7hCAAAQgAAEhgIgzDTwloBfxzscYtjqrWohbGu4Q8S5PT2z+BWCn31Q3qLinc5e0IAABCEAAAmYEEHEzThxVOAGbIt768MI8Qty+JyT7dtDsrek5+s20eXaoFD4p6RACEIAABCBglQAibhUnjdkjYFXEW54krhfiziXolIi3OHrW++p+W+0/eyu7PfC0BAEIQAACEIBAQQQQ8YJA002vBPQinr0tu/mhPpaEuDqg9ps166PM6kPb7wSr8GxO6XVacTwEIAABCEDAIwKIuEfFIJU0ASsi3voYk5rRaoU469M5EXFmLQQgAAEIQAACWgKIuJYccY4JOBDxmkl329th9PjCtlErRbzF6Xvst9tuGMf1oHkIQAACEIAABGwTQMRtE6U9SwSsiHjLXZONp2+n77Bs7PtoPbTrc8RziHjLo8B76Td9V2Zm7paQ0wwEIAABCEAAAoUSQMQLxU1n5gT0It7lOYLNVehW58483ImIa/ud9MGI5lQ5EgIQgAAEIAABfwgg4v7UgkxaCFgW8dY7HjM/eif9cT1ORLzl3s7mB/NM2u8tt9wy2bPRmTwQgAAEIAABCIRHABEPr2YlydieiGd/Hnznh9H3uFe7Wode9ognhVP22/KnAw9LKclJwDAhAAEIQCByAoh45AUOd3i9iXi44+yWeTfFj2+kjAgCEIAABCBQVgKIeFkr7/24EfHm5pUXvK8WCUIAAhCAAAQg0DsBRLx3ZkQUQgARR8QLmWh0AgEIQAACEOgbAUS8b+jpeGICiDgizjkCAQhAAAIQiJsAIh53fQMeHSKOiAc8fUkdAhCAAAQgYEAAETeAxCH9IICII+L9mHf0CQEIQAACECiOACJeHGt66olA2UW8J1gcDAEIQAACEIBAgAQQ8QCLVo6UEfFy1JlRQgACEIAABMpLABEvb+09Hzki7nmBSA8CEIAABCAAgZwEEPGcAAl3RQARd0WWdiEAAQhAAAIQ8IMAIu5HHciigwAizqSAAAQgAAEIQCBuAoh43PUNeHSIeMDFI3UIQAACEIAABAwIIOIGkDikHwQQ8X5Qp08IQAACEIAABIojgIgXx5qeeiKAiPeEi4MhAAEIQAACEAiOACIeXMnKkjAiXpZKM04IQAACEIBAWQkg4mWtvPfjRsS9LxEJQgACEIAABCCQiwAingsfwe4I9Crir1df7vKhZQhAAAIQgAAEQiTgsyEg4iHOqFLk3JOIo+ClmBMMEgIQgAAEIKAl4KcqIOLaehLnmIC5iPt5ajnGQ/MQgAAEIAABCPRGwENhQMR7KyFHF0YAES8MNR1BAAIQgAAEykAAES9DlRmjHQLmIm6nP1qBAAQgAAEIQAACxRJgRbxY3vRmTAARN0bFgRCAAAQgAAEIBEkAEQ+ybGVIGhEvQ5UZIwQgAAEIQKDMBBDxMlff67H7LuKjg9deO214vMGw8nP1NTjqNVeSgwAEIAABCEDAFwKIuC+VII82An6LuGj3NHnVRXx8eFpNwCvfpf2cukIAAhCAAAQgAIEuBBBxpoanBHwWcdHwwVFR7rpxNz1cYFYcPbVS7ile0oIABCAAAQjYIvDaa6/12tQEIXZb6zWxgo9HxAsGTnemBPwV8aqGnziREvEW926x8s7RbuQFAQhAAAIQiIXAyMjIk08+OTw8vLLH19e//nWJkPA0CSutmXqGH8ch4n7UgSw6CHgq4i2bUOor372IOKWGAAQgAAEIxEFg//7969atGx8f/4XqtW/fPtFxaSShYbe1UAgj4qFUqnR5+iniFQ9veVVdnK0ppZueDBgCEIAABE5s3rxZbeGJuv/whz+URhKUdlsLpTyIeCiVKl2efop4qgzpZXBu1izd/GTAEIAABEpOQHZyy64S1VJ4S9AzzzwjJO22FlBpEPGAilWuVIMScSkNjy8s1/xktBCAAAQgIJu8O0X8ydVfezTrJe9nWrs0kpDMbK0RsnLV49Kq/O/E6t9oLZTqIOKhVKp0eXov4qWrCAOGAAQgAAEIpAlkqrPo8ppv7+n8kvfziLiEL9kwtVsjTV+va30olULEQ6lU6fJExEtXcgYMAQhAAAJBEUDE85cLEc/PkBacEEDEnWClUQhAAAIQgIAlAoh4fpCIeH6GtOCEACLuBCuNQgACEIAABCwREBH/Wcdrgq0pnQfLO+k94pkHJG82tqZMcEy6NUtDdN4MIu4cMR3oCCDiOm5EQQACEIAABIohIA59KPVa+eSqzNs002/KMekQ+T4t4m3/VPnXJ1dktinvdx6cbq0YAvl7QcTzM6QFJwQQcSdYaRQCEIAABCBgiYA49I9Sr25r4ekbN+WYdIh8nxbxtn+SH19++eVFSx6R2zTTX/KOvN95cLo1S0N03gwi7hwxHegIIOI6bkRBAAIQgAAEiiEgDj2WehmKeDpEvk+LeNs/JT8++zebvrJiqCHi8r28k3lkurViCOTvBRHPz5AWnBBAxJ1gpVEIQAACEICAJQLi0P+Qej3+xMpJt6bIMekQ+T4t4m3/1Phx7fCqxavvFReX/5Xvux2Wbs3SEJ03g4g7R0wHOgKIuI4bURCAAAQgAIFiCLSJuHjwxo3f/OrXNmQ+R3z5mo0bNmzsdGgTEZeopV9dvGDVF+R/J7BwRLyYutNLKQgg4qUoM4OEAAQgAIFgCXSK+MS7U+RfzUX88RXLJl9fX7Gs2/p6KFBZEQ+lUqXLExEvXckZMAQgAAEIBEWgTcQnWA5P1sgzF8W7rYgnzyuc+KvT7PmI+6BmEMl6TAAR97g4pAYBCEAAAmUn8Nprr23c2LLVZIXBHnE5pm0N++mnnxaUna3pVsST1gJ6sSIeULHKlSoiXq56M1oIQAACEAiNwDe/+c0XX3xx4k3bE//r6OjoM888k4zbbmuhsETEQ6lU6fJExEtXcgYMAQhAAAJBEdi/f//atWu/+93v6lxcLFzC5eHfyaDtthYKSEQ8lEqVLk9EvHQlZ8AQgIBPBF5//XWf0ilXLgHBlw+zlCXtb3zjG7I5u6eXbGv51re+9dOf/jRdWrutBTFpEPEgylTGJBHxMladMUMAAv0mIAq4d+/enTt37tix4zu8+kRA4L/00kt79uwJyMj7PXND7R8RD7Vy0eeNiEdfYgYIAQj4RuBXv/qV+N+rr776i1/8wrfcypaPlEA+J/J73/ueFKVsYy/VeBHxUpU7pMEi4iFVi1whAIHwCchjK0T7wh9HbCOQP41YF4+tqKnxIOIRFzfsoSHiYdeP7CEAgdAIvPLKK7IWHlrW8ecrRZHNQvGPs6wjRMTLWnnvx42Ie18iEoQABKIi8PLLL7MjxcOKSlFkUdzDxEjJCgFE3ApGGrFPABG3z5QWIQABCHQhIJsf5AZN8PhJABH3sy5WskLErWCkEfsEEHH7TGkRAhCAQHcC8oAQ8PhJgNL4WRcrWSHiVjDSiH0CiLh9prQIAQhAABEPcA4g4gEWzTRlRNyUFMcVTAARLxg43UEAAiUngO15OwEojbelyZ8YIp6fIS04IYCIO8FKoxCAAAS6EHBkey8+fONFV3Z8PfyCtg4vPHTl9LW1z0TXttFT3N/Nbeb/6fU/rsTaz+HH66ZfVGs8IzlHpekJAwc7IoCIOwJLs3kJIOJ5CRIPAQhAoBcChrb347/926cvu2zRW98qX/KN/GjYScXI9f7d6CSvBC/7/iO3fPsvDHOu+PGVc19sHC1SXhlC3hw6e0fEDSsS32GIeHw1jWREiHgkhWQYEIBAIARMRPwfv/998e9HBwYaX/KjvGkyRDMRn9RxJz1golzEwt+5bEC+jFz8R+tvzV59z5VDZn6IuMkUivIYRDzKssYwKEQ8hioyBghAIBwCJiL+1H/9r2kLT76XN01GmSHiFdOt7Vp56O+kjX1rP13fxFLdp5He1lI9QF5NCa7Iay9L7A0LN3VxWf/O3i6SEvH2IVRSrK6jVwfSTE9C0iNtjCV5c/pDD7M1xWQSRXgMIh5hUeMYEiIeRx0ZBQQgEAqBbiLead4Tv9NtvB0iXnHTml5X9mEnO7+zF5tTzt3DanQi3MnXGUub3zffb32zLfPuq9SNHLoNoT6uWott4p7sdan81XHrun3VQ6p/gbBHPJRTxWqeiLhVnDRmjwAibo8lLUEAAhCYnICJiM9LbUpp6Hjbm6Yi3rLeXDHRqpS3enb6Rsna6rJNEW+z8/bMJ10Rzx5CbSG/LtknTqRWzZP178qfHJU3m7vP2Zoy+QSN9AhEPNLChj8sRDz8GjICCEAgJAJFb02ZVMSr/posmetWxNvot21NuXnL/ztJeVIJtB5Z/2Ogi4g3F7kT1c7ca46Ih3RyOMwVEXcIl6bzEEDE89AjFgIQgECvBExEXO7LXPiWt6S3psiP2ps1J9vXUVkOr60Zp7a19LAi3kmg4eKTW3g1uLpJPfW0RLHnlqemZA6h3m3Tv6s7T9q3s6diK/8dgK0pvU7YSI5HxCMpZHzDQMTjqykjggAEfCZgIuKVxem//dvklk1RcPkm1+MLJ7jTsfVmzYfWVW/rbH10YK83aybwxcUNLTw5vnnnZdOVJ75Zs3lfZnN3Svo+1IbZNzfezF3Lc8R9Pjdc5oaIu6RL2zkIIOI54BEKAQhAoGcChiLec7sE5CZAaXIj9LcBRNzf2pQ8M0S85BOA4UMAAgUTwPYKBm7eHaUxZxXckYh4cCUrS8KIeFkqzTghAAE/CGB7ftQhIwtK421p8ieGiOdnSAtOCCDiTrDSKAQgAIEsAq+//vpLL70EGz8J7NixQwrkZ25klZMAIp4TIOGuCCDirsjSLgQgAIEsAi+//PIvfvEL2PhGQIrC30i+FcViPoi4RZg0ZZMAIm6TJm1BAAIQmIzAnj17xsbGJjuKfy+agBRFSlN0r/RXFAFEvCjS9NMjAUS8R2AcDgEIQCAXgddee022QORqgmAHBCiKA6geNYmIe1QMUkkTQMSZDxCAAAQKJvCrX/1KtO/VV19lj0rB5Du7kxLIWvjOnTvlD6S+J0MC7ggg4u7Y0nIuAoh4LnwEQwACENAS2Lt3r+wXFwWUh3Xw6gsB2RQuJXjllVe0NSQuGAKIeDClKluiiHjZKs54IQABCEAgIcAzUsozExDx8tQ6sJEi4oEVjHQhAAEIQAACEOiRACLeIzAOL4oAIl4UafqBAAQgAAEIQKA/BBDx/nCn10kJIOKTIuIACEAAAhCAAASCJoCIB12+mJNHxGOuLmODAAQgAAEIQODECUScWeApAUTc08KQFgQgAAEIQAAClggg4pZA0oxtAoi4baK0BwEIQAACEICAXwQQcb/qQTYNAog4kwECEIAABCAAgbgJIOJx1zfg0SHiAReP1CEAAQhAAAIQMCCAiBtA4pB+EEDE+0GdPiEAAQhAAAIQKI4AIl4ca3rqiQAi3hMuDoYABCAAAQhAIDgCiHhwJStLwoh4WSrdp3G+su1bferZqFuf0zuyZ498GQ2jHwf5jE54+Jwelc0zYamsmp7P6NSDMg9ExM1ZcWShBBDxQnGXqbNv33jj3e8c+L15Aze9f2Dk/e/3yiklGUlJEpP0JMmtN93kVWX2PvHE4re97fKPD8iXfCM/epUelVWXg8qq0XHOqtFJoM/nbJ5x9RSLiPeEi4OLI4CIF8e6TD098xd/kVj4O5dVvkR5l7/znccOHfKBgaQhyUhKSW6Ji8svKh9ykxzGN2x4dKCi4El68o38KG96kh6VVReCyqrRcc6q0Umgz+dsnnH1GouI90qM4wsigIgXBLpM3cjaVdrCE6H8f64amHXLh5Y8/pd9/5I0JJkkq+Trdx8buO6PBubPvbnvuUkCX/zwOy/+Xy3p/dH/Grjn//o9H3ITRAJKcKXpUVnD0lBZQ1Cdh3HOqtFlnrOyDPF3//t/l+mXUmWsiHjZKh7MeBHxYEoVTqJ/+9RXGmvhaWN759IWgWv5p5QWO3+/Wxqep1ckom59BYqOyk46eajspIgmOMCTCZaZYZfcHvjUxeH8SrGTKSJuhyOtWCeAiFtHSoPyn+AbOysaVv1v5g+8b/pJ5919St+/JA1Jpk33z5oz8Adf/PW+5yYJ/LsHMv5ckTd9yE0QCag2dFTWsDRU1hBU52Gcs2p0mefs+TMGNt05tWy/qhDxslU8mPEi4sGUKqhEF731rWkX//0ZA7e/eeDLd9yx2IOXpCHJSEoNofzAxwemn3qqB6lVUrj/wgs/Ut+/nmQoP8qbnqR35ymnCK4GOiprXhcqa86q7UjOWTU6CWw7Z8XC//rNHt12UthvNkS8MNR01BsBRLw3XhxtRkCeDvHlgYEzF1WM7d/fN/CXbx54/PLLd3rzkmRmvHngP1Rd/MMfH/jSb/7mt2bO9CS7F7duffj00z9ad3H5Rn6UNz1JT0A9NFCBJugEoGCksoalobKGoDIP45xV00ufs39QtXC5fdPsQh7VUYh4VOWMaTCIeEzV9Gos31g6S1xNXPxzf/i+Nffcc+DAgV/49Hp56dKvXX3Fdbe845lPfGLsb/7Gp9R+cXh8fHTGjE9f+7ufvfEc+UZ+9Co9wSXQBJ0AFIxe5SbJUFl1RaisGl0o5+yaq6/w7XGohf3aQsQLQ01HvRFAxHvjxdHGBGYvuEFE/KI7p8yfP390dPTIkSPGoRwIAQhAAAIQsEkAEbdJk7YsEkDELcKkqTSBa+49u/IY7KlnrlixQv6jqiw1wQcCEIAABCDQFwKIeF+w0+nkBBDxyRlxhIrAxfdNERH/6K0fGhkZGRsbU7VBEAQgAAEIQMACAUTcAkSacEEAEXdBlTZl/Tt5sMZd93xm06ZNskEcJhCAAAQgAIF+EUDE+0WefichgIgzRVwQWPfUXLHws4dOmjNnztatWw/58eH2LkZKmxCAAAQg4D8BRNz/GpU0Q0S8pIV3POwZc64SEb/wzimLFi3avn370aNHHXdI8xCAAAQgAIGuBBBxJoenBBBxTwsTeFpX3nOGiPgVt7175cqVu3btOnbsWOADIn0IQAACEAiYACIecPHiTh0Rj7u+fRnd8ePHz3/wjSLi1029dP369dyp2Zcq0CkEIAABCDQIIOJMBk8JIOKeFibktBp3as6cOZM7NUOuJLlDAAIQiIQAIh5JIeMbhr8iPj487drkNTja5D46mPFmfGUJe0TLVk6X5fD33n/y3Llzt23bdvjw4bDHQ/YQgAAEIBA4AUQ88ALGm76vIj4+PDg8XsUu6j2t9m3FzRMrr3xXfzfe4oQ6sjtmflBE/I+nnbpkyZIdO3bwUT6hFpK8IQABCMRCABGPpZLRjcNXEW+Absp31b4bq+MpP4+uKKEP6JIZp4mIf+TW961evXr37t2yZTz0EZE/BCAAAQgETQARD7p8MSfvr4jXt6Y0N6a0uHeLlXdWaCOvPhFYt27dv//SSSLif/4//viv/uqv5PPt+5QI3UIAAhCAgEMCYbkRIh5WvUqUrb8iXitCahNKLyJeohJ6NtRX9ryYfKbm4ODg5s2b+UxNz+pDOhCAAATKSAARL2PVgxiz9yKe2iTO1pQQptTSJ74gFn7e3afMmzePOzVDqBg5QgACEIifACIef40DHaGvIt5ys2Z9Zzg3awYwy268/wIR8Q/ffvqyZct27tzJnZoB1IwUIQABCMROABGPvcLBjs9XEU8ejFJ9tTwdhccX+j7Vkjs1r775wjVr1uzdu9f3dMkPAhCAAARKQAARL0GRwxyivyIeJs+SZy3r32fNq2wQ//TnPrFhw4b9+/eXHAjDhwAEIAABHwgg4j5UgRwyCCDiTAuLBL7z3Fqx8Hc9OjA0NLRly5aDBw9abJymIAABCEAAAjoCiLiOG1HOCSDizhGXqYPZC25I7tScP3/+6Ogon6lZpuIzVghAAAL+EkDE/a1NyTNDxEs+AewOP7lT8/KpZy5fvpw7Ne2ypTUIQAACEFATQMTV6Ah0SwARd8u3ZK1ffN+U5E7NkZGRsbGxko2e4UIAAhCAgKcEEHFPC0NaiDhzwBYBuVMz+Sif6XfdIR/mxkf52AJLOxCAAAQgkJMAIp4TIOGuCCDirsiWr911T80VCz976KQ5c+Zs3br10KFD5WPAiCEAAQhAwEcCiLiPVSEnIYCIMw1sEZgx5yoR8QvvnLJw4cLt27cfOXLEVsu0AwEIQAACEMhDABHPQ49YhwQQcYdwS9b0NfeeLSJ+2dQzV6xYsWvXrmPHjpUMAMOFAAQgAAFPCSDinhaGtBBx5oAVAsePHz//wTeKiH/sU5dwp6YVpDQCAQhAAAK2CCDitkjSjmUCiLhloGVtrnGn5syZMzdt2sSdmmWdCIwbAhCAgI8EEHEfq0JOQgARZxpYIbBs5XRZDn/v/SfPnTtX7tTko3ysUKURCEAAAhCwQgARt4KRRuwTQMTtMy1li3fM/KCI+Aemnbp48eIdO3YcPXq0lBgYNAQgAAEI+EgAEfexKuTEijhzwBaBK+45Q0T8itvevWrVqt27d3Onpi2wtAMBCEAAAvkJIOL5GdKCEwKsiDvBWrJGRbuTOzVvvv2q9evXj4+PlwwAw4UABCAAAa8JIOJel6fMySHiZa6+rbG/sufF5DM1Z82axZ2atqjSDgQgAAEI2CKAiNsiSTuWCSDiloGWsrnkTs3z73nTI488sm3bNu7ULOUsYNAQgAAE/CWAiPtbm5JnhoiXfAJYGf6N918gIv7h209funTpzp075VGGVpqlEQhAAAIQgIAVAoi4FYw0Yp8AIm6faflavGTGaSLif37LuWvWrNm7d698uE/5GDBiCEAAAhDwlwAi7m9tSp4ZIl7yCZB/+LL+fc7QG0TEb7njIxs2bNi/f3/+NmkBAhCAAAQgYJEAIm4RJk3ZJICI26RZyra+89xasfB3PTowNDS0efPmgwcPlhIDg4YABCAAAX8JIOL+1qbkmSHiJZ8A+Yc/Z8ENIuLn3X3KY489Njo6yp2a+ZHSAgQgAAEI2CWAiNvlSWvWCCDi1lCWtaHkTs3Lp565fPly7tQs6yxg3BCAAAS8JoCIe12eMieHiJe5+lbGfvF9U0TEr775wpGRkbGxMStt0ggEIAABCEDAIgFE3CJMmrJJABG3SbN8bcmdmmfNq3yUz7TPf3Ljxo0HDhwoHwNGDAEIQAACvhNAxH2vUGnzQ8RLW3orA1/31Fyx8LOHTpo9e/aWLVsOHTpkpVkagQAEIAABCFgkgIhbhElTNgkg4jZplq+tGXOuEhG/6M4pCxculDs1jxw5Uj4GjBgCEIAABHwngIj7XqHS5oeIl7b0VgZ+zb1ni4hfNvXMFStW7Nq1i8/UtEKVRiAAAQhAwC4BRNwuT1qzRgARt4ayfA3JJ2gmd2p+9NYPcadm+erPiCEAAQgEQwARD6ZUZUsUES9bxS2OV9a/xcLl6657PrNp0ybu1LTIlqYgAAEIQMAiAUTcIkyaskkAEbdJs2RtJXdq/v79Jz/88MNbt27lo3xKVn+GCwEIQCAYAoh4MKUqW6KIeNkqbnG8d8z8oIj4B6adunjx4u3btx89etRi4zQFAQhAAAIQsEUAEbdFknYsE0DELQMtU3NX3nOGiPgVt7175cqVu3fvPnbsWJlGz1ghAAEIQCAYAoh4MKUqW6KIeNkqbmu8ot3nP/hGEfHrpl66fv16PlPTFljagQAEIAAB6wQQcetIadAOAUTcDsfytSIbUZI7NWfNmsWdmuWrPyOGAAQgEBIBRDykapUqV0S8VOW2ONhlK6eLhb/3/pMfeeSRbdu2caemRbY0BQEIQAACdgkg4nZ50po1Aoi4NZQla+jG+y8QEf/w7acvWbJkx44dfJRPyerPcCEAAQiERAARD6lapcoVES9VuS0O9pIZp4mIf+TW961evXrv3r3y4T4WG6cpCEAAAhCAgEUCiLhFmDRlkwAibpNmadqSOzXPGXqDiPjNt1+1YcOG8fHx0gydgUIAAhCAQHgEEPHwalaSjBHxkhTa7jC/v/uF5E7NoaGhzZs3Hzx40G77tAYBCEAAAhCwSAARtwiTpmwSQMRt0ixNW3MW3CAWft7dp8ybN487NUtTdgYKAQhAIFQCiHiolYs+b0Q8+hK7GGByp+afTT1z2bJlO3fu5E5NF5BpEwIQgAAEbBFAxG2RpB3LBBBxy0DL0dzF900REb/65gtHRkbkTs1yDJpRQgACEIBAqAQQ8VArF33eiHj0JbY+QFn/PmteZYP4tM9/cuPGjfv377feBQ1CAAIQgAAELBJAxC3CpCmbBBBxmzTL0dZzz60VC3/Xo5U7Nbds2cKdmuUoO6OEAAQgEDABRDzg4sWdOiIed31djG529U7Ni+6cMn/+/NHR0SNHjrjohTYhAAEIQAACtggg4rZI0o5lAoi4ZaAlaO6ae88WEb986pkrVqzgTs0SFJwhQgACEAieACIefAljHQAiHmtl3Y0ruVPzo7d+SO7UHBsbc9cRLUMAAhCAAASsEEDErWCkEfsEEHH7TKNuUe7UTD7KZ/pdd2zatOnAgQNRD5fBQQACEIBADAQQ8RiqGOUYEPEoy+puUOuemisWfvbQSXPmzNm6deuhQ4fc9UXLEIAABCAAASsEEHErGGnEPgFE3D7TqFucMecqEfEL75yyaNGi7du3Hz16NOrhMjgIQAACEIiBACIeQxWjHAMiHmVZ3Q3qynvOEBG/4rZ3r1y5cteuXceOHXPXFy1DAAIQgAAErBBAxK1gpBH7BBBx+0zjbfH48ePnP/hGEfHrpl66fv167tSMt9SMDAIQgEBUBBDxqMoZ02AQ8Ziq6XosjTs1Z86cyZ2armnTPgQgAAEI2CKAiNsiSTuWCSDiloFG3dyyldNlOfy99588d+7cbdu2HT58OOrhMjgIQAACEIiEACIeSSHjG0YhIn5w3eDw8xV28s2867847y+HD8ZHsgwjumPmB0XE/3jaqUuWLNmxY4cskJdh1IwRAhCAAARCJ4CIh17BaPMvRMR3zRl8dt+JE/uGv3r9wuE5XxQXT7ycV2AErqjeqfmRW9+3atWq3bt3y5bxwAZAuhCAAAQgUEoCiHgpyx7CoAsS8Yp5V5fDF+46cWLXHEQ8hLnRlqM8IOWcoTeIiN98+1Vyp+b4+HiAgyBlCEAAAhAoIwFEvIxVD2LMRYl4ZUfK9Quf3ScL488PX19dIOcVFoFX9ryYfKbm4ODg5s2b+UzNsMpHthCAAATKTAARL3P1vR57ISJe3ZRSEXFZDkfEvZ4PEyS39IkviIWfd/cp8+bN407NUKtI3hCAAARKSQARL2XZQxh0MSIeAglynITAjfdfICL+4dtPX7Zs2c6dO7lTkxkDAQhAAAKhEEDEQ6lU6fIsRMRrN2uWDm5cA75kxmki4lffctGaNWv27t0b1+AYDQQgAAEIxEwAEY+5ukGPDREPunyFJS/r32fNq2wQ//TnPrFhw4b9+/cX1jUdQQACEIAABHISQMRzAiTcFYFCRLzyvBSeHe6qhIW0+53n1oqFv+vRgaGhoS1bthw8yJPgC+FOJxCAAAQgYIMAIm6DIm04IFCIiMvzCqtPTWl+8RxxB7V02eTsBTckd2rOnz9/dHSUz9R0CZu2IQABCEDAMgFE3DJQmrNFABG3RTLudpI7NS+feuby5cu5UzPuWjM6CEAAAvERQMTjq2kkIypExCNhVeZhXHzflMqdmjdfODIyMjY2VmYUjB0CEIAABIIjgIgHV7KyJIyIl6XSOcYpd2omH+Uz/a47Nm7cyEf55GBJKAQgAAEI9IEAIt4H6HRpQqAQEWePuEkp/D1m3VNzxcLPHjppzpw5W7duPXTokL+5khkEIAABCECggwAizqTwlAAi7mlhfEprxpyrRMQvunPKwoULt2/ffuTIEZ+yIxcIQAACEIDAJAQQcaaIpwQKEfGWsT+/cN71g8/um5TH6OC1tdfgaPPgxrvpNydtiwNyEbjm3rNFxC+beuaKFSt27dp17NixXM0RDAEIQAACECiWACJeLG96MyZQvIifOCE7VSZ9fOH48ODweHUUFfWuWff48LTat5XvptUOMB4rB2oIHD9+PLlT82OfuoQ7NTUEiYEABCAAgX4TQMT7XQH670KgEBHPtUe81b4bC+Hi55h4EdO6cafmzJkzN23axJ2aRUCnDwhAAAIQsEoAEbeKk8bsEeiLiPfyKZtND6+sjTfdO/V+Fg15uAcvKwTuuf9/yHL4e+57w2233fbXf/3XX/va16w0SyMQgAAEIBA0AXsmUkRLiHgRlOlDQaAQEVfklYSktqUkPxmLuLpLAtsI3DHzgyLiH5h26uLFi3fs2HH06FEQQQACEIAABMIigIiHVa8SZeuxiHdsPmlZBGdrSkGz9Ip7zhARv+K2d69atWr37t3cqVkQd7qBAAQgAAF7BBBxeyxpySqBokQ8vU180js1ZYSZd2Nys6bV2hs0Jtp9/oNvFBG/+far1q9fPz6e3EDLCwIQgAAEIBASAUQ8pGqVKtdCRPzgusF5138x9TX54wubDy+sPMOw+axCHl9Y6PR8Zc+LyWdqzpo1izs1C0VPZxCAAAQgYI8AIm6PJS1ZJVCIiO+aM/jVdc/X835+2Og54laHSWM6AstWThcLP/+eNz3yyCPbtm07fPiwrh2iIAABCEAAAn0kgIj3ET5dT0QAEWd+TEDgxvsvEBH/8O2nL126dOfOnfIoQ3BBAAIQgAAEgiOAiAdXsrIkXIiIK7amlIW/5+O8ZMZpIuJ/fsu5a9as2bt3r3y4j+cJkx4EIAABCECgkwAizqzwlEAhIi5j7/VmTU9xlSotWf8+Z+gNyZ2aGzZs2L9/f6mGz2AhAAEIQCAaAoh4NKWMbSBFiXhs3Mownu88t1Ys/F2PDgwNDW3evPngwYNlGDVjhAAEIACB+Agg4vHVNJIRIeKRFNLBMOYsuEFE/Ly7T3nsscdGR0e5U9MBY5qEAAQgAIEiCCDiRVCmDwUBlyKe3o7S+vjCL5o8SlwxGkJsEkju1Lx86pnLly/nTk2bZGkLAhCAAASKJYCIF8ub3owJIOLGqEp34MX3TRER/+83XzgyMjI2Nla68TNgCEAAAhCIhQAiHksloxuHSxFPwdr37F8u3BUdvJgHJHdqnjWv8lE+0z7/yY0bNx44cCDm0TI2CEAAAhCImgAiHnV5Qx4cIh5y9Rzm/lz1Ts2zh06aPXv2li1bDh065LAzmoYABCAAAQi4JICIu6RL2zkIIOI54MUcOmPOVSLiF905ZeHChXKn5pEjR2IeLWODAAQgAIGoCSDiUZc35MEh4iFXz2Hu19x7toj4ZVPPXLFixa5du/hMTYesaRoCEIAABBwTQMQdA6Z5LQGXIs5TU7RV6XecfIJmcqfmR2/9EHdq9rsa9A8BCEAAAnkJIOJ5CRLviAAi7ghs0M3K+rdYuHzddc9nNm3axJ2aQVeT5CEAAQhAABFnDnhKwKWIezpk0pqUwLqn5oqF//79Jz/88MNbt27lo3wmJcYBEIAABCDgMwFE3OfqlDo3RLzU5e8y+DtmflBE/APTTl28ePH27duPHj0KJQhAAAIQgEC4BBDxcGsXeeaIeOQFVg3vynvOEBG/4rZ3r1y5cvfu3ceOHVM1QxAEIAABCEDACwKIuBdlIIlOAog4s6KNgNypef6DbxQRv27qpevXr+czNZkhEIAABCAQOgFEPPQKRps/Ih5tabUDk40oyZ2as2bN4k5NLUXiIAABCEDAIwKIuEfFIJU0AUSc+dBGYNnK6WLh773/5Llz527bto07NZkhEIAABCAQOgFEPPQKRps/Ih5tabUDu/H+C0TEL7n99CVLluzYsYOP8tGCJA4CEIAABHwhgIj7UgnyaCOAiDMl2ghcMuM0EfGP3Pq+1atXy52asmUcRBCAAAQgAIGgCSDiQZcv5uQR8Zir2/vY5AEp5wy9QUT85tuv2rBhw/j4eO9tEAEBCEAAAhDwiwAi7lc9yKZBABFnMqQJfH/3C8mdmkNDQ5s3bz548CB8IAABCEAAAqETQMRDr2C0+SPi0ZZWNbClT3xBLPy8u0+ZN28ed2qqEBIEAQhAAALeEUDEvSsJCSUEEHFmQppAcqfmn009c9myZTt37uROTaYHBCAAAQhEQAARj6CIcQ4BEY+zrtpRXXzfFBHxq2++cGRkZO/evdpmiIMABCAAAQh4RAAR96gYpJImgIgzHxoEZP37rHmVDeLTPv/JjRs37t+/HzgQgAAEIACBCAgg4hEUMc4hIOJx1lU1queeWysW/q5HK3dqbtmyhTs1VRQJggAEIAAB7wgg4t6VhIQSAog4M6FBYPaCG0TEL7pzyvz580dHR48cOQIcCEAAAhCAQAQEEPEIihjnEBDxOOuqGtU1954tIn751DNXrFjBnZoqhARBAAIQgICPBBBxH6tCTqyIMwfSBJI7NT9664fkTs2xsTHgQAACEIAABOIggIjHUccIR8GKeIRFVQ1J7tRMPspn+l13bNq06cCBA6pmCIIABCAAAQh4RwAR964kJJQQQMSZCQmBdU/NFQs/e+ikOXPmbN269dChQ5CBAAQgAAEIxEEAEY+jjhGOAhGPsKiqIc2Yc5WI+IV3Tlm0aNH27duPHj2qaoYgCEAAAhCAgHcEEHHvSkJCrIgzB9IErrznDBHxK25798qVK3ft2nXs2DH4QAACEIAABOIggIjHUccIR8GKeIRF7X1Ix48fP//BN4qIf+xTl3CnZu/8iIAABCAAAa8JIOJel6fMySHiZa5+Y+yNOzVnzpzJnZpMCQhAAAIQiIwAIh5ZQeMZDiIeTy1zjGTZyumyHP7e+0+eO3futm3bDh8+nKMxQiEAAQhAAAJ+EUDE/aoH2TQIIOJMBiFwx8wPioj/8bRTlyxZsmPHDlkgBwsEIAABCEAgGgKIeDSljG0giHhsFVWN54rqnZofufV9q1at2r17t2wZVzVDEAQgAAEIQMBHAoi4j1UhJyGAiDMN5AEp5wy9QUT85tuvWr9+/fj4OEwgAAEIQAACMRFAxGOqZlRjQcSjKqdqMK/seTH5TM3BwcHNmzfzmZoqigRBAAIQgIC/BBBxf2tT8swQ8ZJPABn+0ie+IBZ+3t2nzJs3jzs1mQ8QgAAEIBAfAUQ8vppGMiJEPJJC5hjGjfdfICL+4dtPX7p06c6dO7lTMwdLQiEAAQhAwEcCiLiPVSEnIYCIMw0umXGaiPjVt1y0Zs2avXv3AgQCEIAABCAQGQFEPLKCxjMcRDyeWqpGIuvfZ82rbBD/9Oc+sWHDhv3796uaIQgCEIAABCDgLwFE3N/alDwzRLzkE+A7z60VC3/XowNDQ0Nbtmw5ePBgyYEwfAhAAAIQiI8AIh5fTSMZESIeSSG1w5iz4IbkTs3HHntsdHSUz9TUgiQOAhCAAAT8JYCI+1ubkmeGiJd8AiR3al4+9czly5dzp2bJJwPDhwAEIBArAUQ81soGPy5EPPgS5hvAxfdNqdypefOFIyMjY2Nj+RojGgIQgAAEIOAjAUTcx6qQkxBAxMs8DeROzeSjfKbfdcfGjRv5KJ8yTwbGDgEIQCBiAoh4xMUNe2iIeNj1y5f9uqfmioWfPXTS7Nmz5U7NQ4cO5WuPaAhAAAIQgICPBBBxH6tCTqyIl3wOzJhzlYj4RXdOWbhw4fbt248cOVJyIAwfAhCAAASiJICIR1nWGAbFingMVdSO4Zp7zxYRv2zqmStWrNi1axefqakFSRwEIAABCHhNABH3ujxlTg4RL231jx8/ntyp+bFPXcKdmqWdBgwcAhCAQBkIIOJlqHKQY0TEgyybjaQbd2o+9NBDmzZt4k5NG1BpAwIQgAAEfCSAiPtYFXISAoh4aafBspXTZTn89+8/+eGHH966dSsf5VPamcDAIQABCERPABGPvsShDhARD7VyufO+Y+YHRcQ/MO3UxYsX79ix4+jRo7mbpAEIQAACEICAjwQQcR+rQk6siJd5Dlxxzxki4lfc9u5Vq1bt3r372LFjZabB2CEAAQhAIGICiHjExQ17aKyIh10/bfai3ec/+EYR8Ztvv2r9+vXj4+PaloiDAAQgAAEI+E4AEfe9QqXNDxEvZ+lf2fNi8pmas2bN4k7Ncs4BRg0BCECgPAQQ8fLUOrCRIuKBFcxSusmdmuff86ZHHnlk27Zt3KlpiSvNQAACEICAjwQQcR+rQk5CABEv5zS48f4LRMQ/fPvpS5cu3blzJx/lU85pwKghAAEIlIQAIl6SQoc3TEQ8vJrZyPiSGaeJiP/5LeeuXr1679698uE+NlqlDQhAAAIQgICPBBBxH6tCTqyIl3MOyPr3OUNvSO7U3LBhw/79+8vJgVFDAAIQgEBJCCDiJSl0eMNkRTy8muXO+DvPrRULf9ejA0NDQ5s3bz548GDuJmkAAhCAAAQg4C8BRNzf2pQ8M0S8hBNgzoIbRMTPu/uUxx57jDs1SzgBGDIEIACBshFAxMtW8WDGi4gHUyp7iSZ3al4+9czly5dzp6Y9rrQEAQhAAAKeEkDEPS0MaSHiJZwDF983RUT86psvHBkZGRsbKyEBhgwBCEAAAqUigIiXqtwhDRYRD6laNnKVOzXPmlf5KJ9pn//kxo0buVPTBlTagAAEIAABrwkg4l6Xp8zJ+Svio4PXVl6Doy3lqb3b8X6Za9jb2J+r3ql59tBJs2fP3rJly6FDh3qL52gIQAACEIBAaAQQ8dAqVpp8/RVxKcH48LQWEW/+XPlu2vB4acpkcaAz5lwlIn7RnVPmz58/Ojp65MgRi43TFAQgAAEIQMBDAoi4h0UhpQqBkES8xctlaRwT18zha+49O7lTc8WKFbt27eIzNTUQiYEABCAAgaAIIOJBlatMyYYk4i3u3b5a3lY02f3Mq5PAU089deE9bxIR/2/XnDdjxgx5agqUIAABCEAAAgoCYbkSIh5WvUqUbawiXqIS9jJUWf8WC5evu+75zKZNmw4cONBLNMdCAAIQgAAEgiSAiAdZtjIkHZKIszUl94xc99Tc5E7Nhx9+eOvWrYcPH87dJA1AAAIQgAAEfCeAiPteodLmF5KIp27e5GZN3Yy9Y+YHRcQ/MO3URYsWbd++/ejRo7p2iIIABCAAAQgERAARD6hY5Uo1KBGX0vD4wlzz88p7zhARv+K2d69cuXL37t3Hjh3L1RzBEIAABCAAgRAIIOIhVKmUOXot4qWsiLtBHz9+/PwH3ygift3US9evX89narpDTcsQgAAEIOAVAUTcq3KQTJMAIl6e2SAbUZI7NWfNmsWdmuWpOyOFAAQgAAFEnDngKQFE3NPCOEhr2crpYuHvvf/kuXPnbtu2jTs1HTCmSQhAAAIQ8JEAIu5jVchJCCDi5ZkGyZ2al9x++pIlS3bs2MFH+ZSn9IwUAhCAQMkJIOIlnwD+Dh8R97c2tjO7ZMZpIuIfufV9q1evljs1Zcu47R5oDwIQgAAEIOAjAUTcx6qQEyvi5ZkD8oCUc4beICJ+8+1XbdiwYXx8vDxjZ6QQgAAEIFByAoh4ySeAv8NnRdzf2ljN7Pu7X0ju1BwcHNy8eTOfqWmVLo1BAAIQgIDXBBBxr8tT5uQQ8ZJUf+kTXxALP+/uU+bNm8edmiUpOsOEAAQgAIGEACLOTPCUACLuaWFsp3Xj/ReIiP/Z1DOXLVu2c+dO7tS0DZj2IAABCEDAXwKIuL+1KXlmiHhJJsDF900REb/65gtHRkb27t1bklEzTAhAAAIQgAAr4swBfwkg4v7Wxl5msv591rzKBvFPf+4TGzdu3L9/v722aQkCEIAABCDgOwFWxH2vUGnzQ8TLUPrnnlsrFv6uRweGhoa2bNly8ODBMoyaMUIAAhCAAAQSAog4M8FTAoi4p4WxmtbsBTckd2rOnz9/dHT0yJEjVpunMQhAAAIQgIDXBBBxr8tT5uQQ8TJU/5p7zxYRv3zqmStWrOBOzTJUnDFCAAIQgECaACLOfPCUACLuaWGsppXcqfnRWz8kd2qOjY1ZbZvGIAABCEAAAr4TQMR9r1Bp80PEoy+93KmZfJTP9Lvu2LRpEx/lE33FGSAEIAABCLQRQMSZEp4SQMQ9LYy9tNY9NVcs/Oyhk+bMmbN169ZDhw7Za5uWIAABCEAAAgEQQMQDKFI5U0TEo6/7jDlXiYhfeOeURYsWbd++/ejRo9EPmQFCAAIQgAAE0gQQceaDpwQQcU8LYy+t5E7NK257t9ypuWvXrmPHjtlrm5YgAAEIQAACARBAxAMoUjlTRMTjrvvx48fPf/CNIuIf+9Ql3KkZd60ZHQQgAAEIdCOAiDM3PCWAiHtaGEtpNe7UnDlzJndqWoJKMxCAAAQgEBgBRDywgpUnXUQ87lovWzldlsPfe//Jc+fO3bZt2+HDh+MeL6ODAAQgAAEIdBJAxJkVnhJAxD0tjKW07pj5QRHxP5526pIlS3bs2MGdmpa40gwEIAABCIREABEPqVqlyhURj7vcV9xzhoj4R25936pVq3bv3i1bxuMeL6ODAAQgAAEIsCLOHAiGACIeTKl6T1QekHLO0BtExG++/ar169ePj4/33gYREIAABCAAgeAJsCIefAljHQAiHmtlZVyv7Hkx+UzNwcHBzZs385maEdeaoUEAAhCAwAQEEHGmh6cEEHFPC2MjraVPfEEs/Ly7T3nkkUe4U9MGUdqAAAQgAIEgCSDiQZatDEkj4hFX+cb7LxAR//Dtpy9dunTnzp3yKMOIB8vQIAABCEAAAt0IIOLMDU8JIOKeFsZGWpfMOE1E/M9vOXfNmjV79+610SRtQAACEIAABMIjgIiHV7OSZIyIx1poWf8+a15lg/inP/eJDRs27N+/P9aRMi4IQAACEIDAxAQQcWaIpwQQcU8Lkzut7zy3Viz8XY8ODA0Nbdmy5eDBg7mbpAEIQAACEIBAkAQQ8SDLVoakEfFYqzxnwQ3JnZqPPfbY6Ogon6kZa6EZFwQgAAEITEoAEZ8UEQf0hwAi3h/u7ntN7tS8fOqZy5cv505N97zpAQIQgAAE/CWAiPtbm5JnhojHOgEuvm+KiPjVN184MjIyNjYW6zAZFwQgAAEIQGBSAoj4pIg4oD8EEPH+cHfca+NOzel33bFx40Y+yscxb5qHAAQgAAGvCSDiXpenzMkh4lFWf91Tc2U5/Oyhk2bPni13ah46dCjKYTIoCEAAAhCAgAkBRNyEEsf0gQAi3gfo7rucMecqEfGL7pyycOHC7du3HzlyxH2f9AABCEAAAhDwlAAi7mlhSAsRj3IOXHPv2SLil009c8WKFbt27eIzNaOsMoOCAAQgAAFDAoi4ISgOK5oAIl40cff9HT9+PLlT82OfuoQ7Nd3zpgcIQAACEPCdACLue4VKmx8iHl/pZf1bLFy+HnrooU2bNnGnZnwlZkQQgAAEINATAUS8J1wcXBwBRLw41kX1tGzldLHw37//5Icffnjr1q18lE9R4OkHAhCAAAQ8JYCIe1oY0kLE45sDd8z8oIj4B6adunjx4h07dhw9ejS+MTIiCEAAAhCAgDkBRNycFUcWSgARLxR3IZ1dec8ZIuJX3PbuVatW7d69+9ixY4V0SycQgAAEIAABTwkg4p4WhrQQ8cjmgGj3+Q++UUT8uqmXrl+/fnx8PLIBMhwIQAACEIBArwQQ8V6JcXxBBBDxgkAX1c0re15M7tScNWsWd2oWRZ1+IAABCEDAawKIuNflKXNyiHhk1U/u1Dz/njc98sgj27Zt407NyOrLcCAAAQhAQEEAEVdAI6QIAoh4EZQL7OPG+y8QEf/w7acvXbpU7tTko3wKZE9XEIAABCDgKQFE3NPCkBYiHtkcuGTGaSLiH7n1fatXr967d698uE9kA2Q4EIAABCAAgV4JIOK9EuP4gggg4gWBLqQbWf8+Z+gNIuI3337Vhg0b9u/fX0i3dAIBCEAAAhDwmgAi7nV5ypwcIh5T9b+/+wWx8Hc9OjA0NLR58+aDBw/GNDrGAgEIQAACENARQMR13IhyTgARd464wA7mLLhBRPy8u0957LHHuFOzQPB0BQEIQAACXhNAxL0uT5mTQ8Rjqn5yp+blU89ctmzZzp07uVMzpuIyFghAAAIQUBNAxNXoCHRLABF3y7fY1i++b4qI+NU3XzgyMjI2NlZs5/QGAQhAAAIQ8JQAIu5pYUgLEY9mDsj691nzKh/lM+3zn9y4cSN3akZTWQYCAQhAAAI5CSDiOQES7ooAIu6KbOHtPvfcWrHws4dOmj179pYtWw4dOlR4CnQIAQhAAAIQ8JEAIu5jVchJCCDi0UyDGXOuEhG/6M4p8+fPHx0dPXLkSDRDYyAQgAAEIACBPAQQ8Tz0iHVIABF3CLfYpq+59+zkTs0VK1bs2rWLOzWLxU9vEIAABCDgLwFE3N/alDwzRDyaCZDcqfnRWz/EnZrR1JSBQAACEICAFQKIuBWMNGKfACJun2k/WpT1b7Fw+brrns9s2rTpwIED/ciCPiEAAQhAAAI+EkDEfawKOQkBRDyOabDuqbnJnZpz5szZunXr4cOH4xgXo4AABCAAAQjkJ4CI52dIC04IIOJOsBbe6B0zPygi/oHP/NaiRYu2b99+9OjRwlOgQwhAAAIQgICnBBBxTwtDWoh4HHPgynvOEBG/4rZ3r1y5Uu7UPHbsWBzjYhQQgAAEIACB/AQQ8fwMacEJAUTcCdZiGz1+/Pj5D75RRPy6qZeuX7+ez9QsFj+9QQACEICA7wQQcd8rVNr8EPEISi8bUZI7NWfOnMmdmhEUlCFAAAIQgIBdAoi4XZ60Zo0AIm4NZf8aWrZyulj4e+8/ee7cudu2beNOzf6Vgp4hAAEIQMBHAoi4j1UhJyGAiEcwDZI7NS+5/fQlS5bs2LGDj/KJoKYMAQIQgAAELBJAxC3CpCmbBBBxmzT71NYlM04TEf/Ire9bvXr17t27Zct4nxKhWwhAAAIQgICPBBBxH6tCTqyIRzAH5AEp5wy9QUT85tuv2rBhw/j4eASDYggQgAAEIAABiwQQcYswacomAVbEbdLsR1vf3/1Ccqfm4ODg5s2b+UzNfhSBPiEAAQhAwGsCiLjX5Slzcoj4BNU/dujQ1ptu+tKfnvX+zw6s+NP/vPeJJ7yaKgdHR79x+eVX/cWviYWfd+dJcz7/ee7U9KpAJAMBCEAAAp4QQMQ9KQRptBMITcRHB69NXoOj7ov55Dnn3P3Ogd+bV1lvPn/GwF+/eWD0s591361RD0f27Fn8trfd9P5KbvL1nhkD09/0ptGnnuJOTSN8HAQBCEAAAmUigIiXqdpBjTUoER8fnlYT8Mp304ad7obeNW9ew8IT2T1PXPztbzmwd688H7DvrzUf/vAn6xaepPcnHx94/E/+JKjZR7IQgAAEIACBIggg4kVQpg8FgZBEvOnhMlBZGndr4ktvvypZCw/o67Ibf00xBwiBAAQgAAEIxE0AEY+7vgGPLiQRb3HvFivvLMDG776S82vmdZf93qPtFi4bVFZ8+cs5W7YS/v998JTOvxAuv+HXrDROIxCAAAQgAIGJCYSlPoh4WPUqUbaxinj+Eta2pqRcXCx87tvfIndw5mxcLm05W5Dwpy+7rLFBPDHyyz8+IG/mbNlKbjlzmCCc9NRsQadGJ4E+0/M5N8/ReZ4elc1zznbGIuJ2edKaNQIhiXixW1MEce1mzaqLW7xZ08rlVW7WXPTWtzZcXCxcfpQ3c84MK7nlzAERdwGQyuah6jM9n3Pz3HQ9T4/K5jlnEXG79GjNIYGQRPxEoTdrCnRZ/P72jTcO/snvvv9zch/kf7L1+EJbl1d5fKEsgd/yoTf92Y2/Jt/Ij/kniq3c8meS2QLpqcGCTo0OXYsVHZWNuLKIeJ7iElsogaBEXMgU+vhCR5XwWYl8zs3z35qep0dl85zOPtPzOTfPTwrP06Oyec5ZRNwuPVpzSCA0EXeIgqYhAAEIQAACEIiSAHvEoyxrDINCxGOoImOAAAQgAAEIQKA7AUSc2eEpAUTc08KQFgQgAAEIQAAClggg4pZA0oxtAoi4baK0BwEIQAACEICAXwQQcb/qQTYNAog4kwECEIAABCAAgbgJIOJx1zfg0SHiAReP1CEAAQhAAAIQMCCAiBtA4pB+EEDE+0GdPiEAAQhAAAIQKI4AIl4ca3rqiQAi3hMuDoYABCAAAQhAIDgCiHhwJStLwoh4WSrNOCEAAQhAAAJlJYCIl7Xy3o8bEfe+RCQIAQhAAAIQgEAuAoh4LnwEuyOAiLewHR28tvIaHD1xYnx4WvX7acPj7vD32DLp9QiseTjo1Ogk0Gd6PufmOTrP06OysZ6zecaVIxYRzwGPUJcEEPEUXXHvioKLdwwPDta+lfd8UXHSU58JoFOjk0Cf6fmcm+foPE+PysZ6zuYZV65YRDwXPoLdEUDEU2xHB+vOLWsxiZKnLMRdEQxbJj1DUJ2HgU6NrvJ3qcfnhc+5eY7O8/SobKznbJ5x5YpFxHPhI9gdAUQ8U8QbqzF+ijjp9XhGNH+pg65HdC265h89Ktt7PZsRPtPzOTfPTwr/08szafWxiLieHZFOCSDiabzNa3/j3dTauNNCmDROeiaUMo8BnRpdy291/84LKktl8xBQxzLx1Oj6FYiI94s8/U5CABFnikAAAhCAAAQgEDcBRDzu+gY8OkQ84OKROgQgAAEIQAACBgQQcQNIHNIPAoh4P6jTJwQgAAEIQAACxRFAxItjTU89EUDEe8LFwRCAAAQgAAEIBEcAEQ+uZGVJGBFPVbr2ARLVz/FJv+pPMuzzpCA9dQFAp0YngT7T8zk3z9F5nh6VjfWczTOuXLGIeC58BLsjgIin2I4PD3r0MZodRSc99XkAOjU6CfSZns+5eY7O8/SobKznbJ5x5YpFxHPhI9gdAUTcHVtahgAEIAABCEDABwKIuA9VIIcMAog40wICEIAABCAAgbgJIOJx1zfg0SHiAReP1CEAAQhAAAIQMCCAiBtA4pB+EEDE26jLh3in79Oc5tmmcdJTnyWgU6OTQJ/p+Zyb5+g8T4/KxnrO5hmXOhYRV6Mj0C0BRDzNV27UbzPvym8CTx6aUn16BenpzgfQ6bglUT7T8zk3z9F5nh6VjfWczTOuPLGIeB56xDokgIin4I4OZiyAi4p7YuKkpz4RQKdGV7U1f88Ln3PzHJ3n6VHZWM/ZPOPKFYuI58JHsDsCiHjbini7dMuyjCceXl2YJD3duQA6HbfGiri3E4/KUtk8BNSxTDw1un4FIuL9Ik+/kxBAxNsAtX+MhDcW3lAiHz9rqA7RZ3o+51ZdnPTyU6SobO7fIVRWjRB0anT+X1LyDE0Xi4jruBHlnAAi7hwxHUAAAhCAAAQg0FcCiHhf8dN5dwKIOLMDAhCAAAQgAIG4CSDicdc34NEh4i3Fqz8uK3Vzmj83azafIUd6PZ9yVLZnZKkAn+n5nJsgJD31xAOdGp3/Ey/P0LSxiLiWHHGOCSDirbpRU1z5FVCXXX9EvJkU6fV4WoCuR2Dtf556e15QWSqbh4A6lomnRte3QES8b+jpeGICiHiKT8sDs+oC7o+Ik576bAadGp0E+kzP59w8R+d5elQ21nM2z7hyxSLiufAR7I4AIt5NxOu/pjwVcdLr5aRofyZx9Wcqa4jQZ3o+59ZuupyzhhOuehiV7YVW+7Ge08szNH0sIq5nR6RTAoh4Gm/Ho2GTXYq+PMKQ9NTnAujU6KpO1HYOeHRe+Jyb5+g8T4/KxnrO5hlXnlhEPA89Yh0SQMQdwqVpCEAAAhCAAAQ8IICIe1AEUsgigIgzLyAAAQhAAAIQiJsAIh53fQMeHSKeKl7yOW6+bETpmFWkpz7RQKdGJ4E+0/M5N8/ReZ4elY31nM0zrlyxiHgufAS7I4CId/Hd5PPGPZTy9Kc+k15PZwboesLVdrDP9HzOreG7XFIU04/KKqA1Qjynl2domlhEXEONmAIIIOITQvb8QkZ66lMEdGp0npsllaWyeQioY5l4anQFBSLiBYGmm14JIOK9EuN4CEAAAhCAAATCIoCIh1WvEmWLiJeo2AwVAhCAAAQgUEoCiHgpyx7CoBHx7lVq/0yEEOpJjhCAAAQgUDABflkUDFzTHSKuoUZMAQQQ8RTk9Ca/5M4qr+6vSl/rk09U8ep2UklJPq6yirMJ0pPbSasJeZJL1lldK2c1w3pp6zALuAoYdNF6bviVW+NkSE4Jv5IzYNvPQzJmmzefOFubc5Wzwr+Tgl8W/Zy2ur4RcR03opwTQMRbEFeurg1f822Ro5lP8zPnOj59zvmM6dpBIz3Jqe5CKTnvX2LJXwaDoy3F7Ws67Z3X1UcQDg5Oq81Aj6ZfapaNDta9yBPfTc22GtaKtHn8R5dPM695fqbOVE9EvJHG6LCcFElBfbmeNJYb+GXh03SeLBdEfDJC/HufCCDiGVJU80iPTKh24a+5T9q+PfmtWZXdRnpNR/MkvQaxiox7YpCpidfyJ1bqjxhPdLLlRKj/4MnZkZmGJ7Mu+Qsw8+VjZevUPKGXte5QMXFP0FVP38rffMn56snp0LiopJdFGsQ8o1e48yDihSOnQzMCiHgWp+T6Olw3SzOUzo/y2XTrv5Wq1/zMX6HO8UzUQct/OEj+M7dnv89r4Jo7Kzxa/Eun0iDpyy/1jP8m5NF/JhofHqxt1+rr/O/Webs+Vn/2pLLN3FIJeZJbmie/LLyc2llJIeLBlKpsiSLi3X9H+bZ2mlpday7qerYS07YC6IvtZtuaRzZe41apawOhL/AqZ0gjqcbM82jitS87+wTO818oHSeGR3+lZswwj/7Eaimsf/+hLYRfFoWfG4h44cjp0IwAIm7GiaMgAAEIQAACEAiVACIeauWizxsRj77EDBACEIAABCBQcgL/P3J3+6M76tLCAAAAAElFTkSuQmCC",
            ContentType: "image/png"
        }

        $.ajax({
            url: geminiUrl,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    itemAttachmentDelete: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/attachments/58";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "DELETE",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    itemHistoryGet: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/history";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    itemDependencyGet: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/dependencies";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    itemLinkGet: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/links";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    itemFollowerGetAll: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/watchers";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    itemFollowerCreate: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/watchers/1";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "POST",
            data: null,
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    itemFollowerDelete: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/watchers/1";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "DELETE",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    codeCommitCreate: function () {
        var geminiUrl = "http://localhost/gemini/api/items/36/codecommits";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        var geminiData = {
            ProjectId: "17",
            IssueId: "36",
            Fullname: "John Smith",
            Comment: "The issue was solved gem:36",
            Data: "{" +
           	           "\"RevisionId\": \"3\"," +
           	           "\"RepositoryUrl\":\"http://localhost:3343/svn/john\"," +
                       "\"Files\":" +
                           "[{" +
                              "\"Filename\":\"/trunk/dashboard.cs\"," +
                              "\"PreviousFileRevisionId\":\"5\"" +
                           "}]" +
                  "}",
            Provider: "1"
        }

        $.ajax({
            url: geminiUrl,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(geminiData),
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },

    breezeGetEnquiry: function () {
        var geminiUrl = "http://localhost/gemini/api/breeze/enquiry/4";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    breezeGetEnquiries: function () {
        var geminiUrl = "http://localhost/gemini/api/breeze/enquiry";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    },
    breezeGetMessages: function () {
        var geminiUrl = "http://localhost/gemini/api/breeze/mailbox/1/messages/5/0";
        var geminiUsername = Base64.encode("manager:xvitjc5bmm"); // user : apikey

        $.ajax({
            url: geminiUrl,
            type: "GET",
            headers: { "Authorization": "Basic " + geminiUsername },
            success: function (project) {
                alert('Success!');
            }
        });
    }

}

var Base64 = {

    // private property
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    // public method for encoding
    encode: function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = Base64._utf8_encode(input);

        while (i < input.length) {

            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
            this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
            this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

        }

        return output;
    },

    // public method for decoding
    decode: function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {

            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

        }

        output = Base64._utf8_decode(output);

        return output;

    },

    // private method for UTF-8 encoding
    _utf8_encode: function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    },

    // private method for UTF-8 decoding
    _utf8_decode: function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        while (i < utftext.length) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return string;
    }

}

