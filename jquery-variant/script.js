let Pulse = {
    username: 'user',
    password: 'pass',
    baseUrl: 'https://intra.proekspert.ee/pulse-johvi',
    headers: {'Content-Type': 'application/json'},

    techItemTemplate: '<div class="MuiChip-root jss1609 MuiChip-outlined jss1610" id="{technology}">' +
        '  <p class="MuiTypography-root MuiTypography-body1" style="font-weight:600;font-size:14px;line-height:unset">' +
        '    <span class="MuiChip-label">{technology}</span>' +
        '  </p>' +
        '</div>',

    init: function () {
        Pulse.auth.getToken();
    },

    auth: {
        addAuthHeader: function (token) {
            Pulse.headers['Authorization'] = 'Bearer ' + token;
        },

        getToken: function () {
            $.ajax({
                url: Pulse.baseUrl + '/auth',
                data: JSON.stringify({
                    username: Pulse.username,
                    password: Pulse.password
                }),
                headers: Pulse.headers,
                method: 'post',
                success: function (data) {
                    Pulse.auth.addAuthHeader(data.token);
                }
            })
        }
    },

    projects: {
        populateProjectTechnologies: function (projectId) {
            let $techList = $('div#project-technologies');
            $techList.empty();

            $.ajax({
                url: Pulse.baseUrl + '/api/projects/' + projectId,
                headers: Pulse.headers,
                method: 'get',
                success: function (data) {
                    console.log(data.technologies)
                    data.technologies
                        .forEach((technology) => $techList.append(Pulse.projects.buildTechnology(technology)))
                }
            })

        },

        cleanTechnologies: function () {
        },

        buildTechnology: function (technology) {
            return Pulse.techItemTemplate.replaceAll('{technology}', technology);
        }
    }
}

$(document).ready(Pulse.init);
