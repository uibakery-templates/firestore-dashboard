if ({{params.length}} === 0) return {{actions.fetchSurveys.data}}
return {{actions.fetchSurveys.data}}.filter(survey => {{params}}.includes(survey.itemId));