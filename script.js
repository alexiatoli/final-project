function showDetails(area) {
    let title, body;

    switch(area) {
        case 'software':
            title = 'Software Development';
            body = '<p>Software development involves designing and creating applications and systems. Recommended degree: Software Development.</p>';
            break;
        case 'cybersecurity':
            title = 'Cybersecurity';
            body = '<p>Cybersecurity professionals protect organizations from cyber threats. Recommended degree: Cybersecurity.</p>';
            break;
        case 'networking':
            title = 'Networking';
            body = '<p>Networking specialists design and maintain network systems. Recommended degree: Networking.</p>';
            break;
        case 'datamanagement':
            title = 'Data Management';
            body = '<p>Data managers organize and analyze data to drive decision-making. Recommended degree: Data Management.</p>';
            break;
    }

    document.getElementById('modalLabel').innerHTML = title;
    document.getElementById('modalBody').innerHTML = body;
    $('#modal').modal('show');
}
