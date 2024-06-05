if ({{data.length}} === 0) return {{actions.fetchResponses.data}}
return {{actions.fetchResponses.data}}.filter(response => {{data}}.includes(response.surveyId));