document.addEventListener('DOMContentLoaded', function () {
    var issues = [];

    // Display existing issues
    displayIssues();

    // Function to add a new issue
    window.addIssue = function () {
        var id = document.getElementById('issueid').value;
        var issue  = document.getElementById('issue').value;
        var description = document.getElementById('issueDescription').value;
        var priority = document.getElementById('priority').value;
        var department = document.getElementById('department').value;
        var status = document.getElementById('status').value;
        var open = document.getElementById('open').value;
        var close = document.getElementById('close').value;
        var file = document.getElementById('file').value;


        if (id && issue && description && priority && department && status && open && close && file) {
            var newIssue = {
                id: generateUniqueId(),
                issue: issue,
                description: description,
                priority: priority,
                department: department,
                status: status,
                open:open,
                close:close,
                file:file
            };

            issues.push(newIssue);
            displayIssues();
            clearForm();
        }
    };

    // Function to display issues
    function displayIssues() {
        var issueList = document.getElementById('issueList');
        issueList.innerHTML = '';

        issues.forEach(function (issue) {
            var issueDiv = document.createElement('div');
            issueDiv.classList.add('issue');
            issueDiv.innerHTML = `
                <div>
                    <strong>id:</strong> ${issue.id}<br>
                    <strong>issue:</strong> ${issue.issue}<br>
                    <strong>Description:</strong> ${issue.description}<br>
                    <strong>Priority:</strong> ${issue.priority}<br>
                    <strong>Department:</strong> ${issue.department}<br>
                    <strong>Status:</strong> ${issue.status}<br>
                    <strong>open:</strong> ${issue.open}<br>
                    <strong>close:</strong> ${issue.close}<br>
                    <strong>file:</strong> ${issue.file}

                </div>
                <div class="actions">
                    <button style="height:4px; weight:5%;" onclick="deleteIssue(${issue.id})">Delete</button>
                </div>
            `;
            issueList.appendChild(issueDiv);
        });
    }

    // Function to delete an issue
    window.deleteIssue = function (id) {
        issues = issues.filter(function (issue) {
            return issue.id !== id;
        });
        displayIssues();
    };

    // Function to generate a unique ID for new issues
    function generateUniqueId() {
        return Math.floor(Math.random() * Date.now());
    }

    // Function to clear the form
    function clearForm() {
        document.getElementById('issueid').value = '';
        document.getElementById('issue').value = '';
        document.getElementById('issueDescription').value = '';
        document.getElementById('priority').value = 'low';
        document.getElementById('department').value = '';
        document.getElementById('status').value = 'open';
        document.getElementById('open').value = '';
        document.getElementById('close').value = '';
        document.getElementById('status').value = 'file';

    }
});
