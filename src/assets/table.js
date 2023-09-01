
var ValueURL = '';



function getConstituencies(){
    $.ajax({
        url: 'http://localhost:8080/constituency', // Replace with the actual URL for fetching wards
        method: 'GET',
        dataType: 'json',
        success: function (wardData) {
           console.log("Ward Data:", wardData);
           let wardSelect = document.createElement('select');
           wardSelect.add(new Option('All Constituency'));
    
            wardData.forEach(function (ward) {
                wardSelect.add(new Option(ward.constituencyName));
            });
    
            let wardDropdownContainer = document.querySelector('.input-style.custom');
            wardDropdownContainer.appendChild(wardSelect);

            wardSelect.addEventListener('change', function () {
                let selectedValue = wardSelect.value;
                if(selectedValue == 'All Constituency'){
                    ValueURL = '';
                    reloadTable(ValueURL);
                }
                wardData.forEach(function (ward) {
                    if (ward.constituencyName === selectedValue) {
                        // console.log('Selected Ward:', ward.constituencyId);
                        ValueURL = ward.constituencyId;
                        console.log("ValueURL:", ValueURL);
                        reloadTable(ValueURL);
                    }
                });
                // console.log('Selected Constituency:', selectedValue);
            });
        },
        error: function (error) {
            console.error('Error fetching ward data:', error);
        }
    });
}


function addCell(tr, content, colSpan = 1) {
    let td = document.createElement('th');

    $(td).css('background-color', 'rgb(230, 207, 163)');
 
    td.colSpan = colSpan;
    td.textContent = content;
 
    tr.appendChild(td);
}



var table = new DataTable('#example', {
    info: false,
    ordering: true,
    paging: true,
    processing: true,

    ajax: {
        url: 'http://localhost:8080/voterData',
        method: 'GET',
        dataType: 'json',
        dataSrc: function (data) {
            var finalData = [];
            
            data.forEach(element => {
                element.ageGroup.ageGroupName = element.ageGroup.minAge + '-' + element.ageGroup.maxAge;
            });
            console.log(data);

            if(ValueURL !== ''){
                data.forEach(element => {
                    if(element.booth.boothWard.municipality != null || element.booth.boothWard.gramPanchayat != null){
                        if(element.booth.boothWard.municipality != null){
                            if(element.booth.boothWard.municipality.constituency.constituencyId == ValueURL){
                                finalData.push(element);
                            }
                        }
                        else{
                            if(element.booth.boothWard.gramPanchayat.mandal.constituencyMandal.constituencyId == ValueURL){
                                finalData.push(element);
                            }
                        }
                        // if(element.booth.boothWard.municipality.constituency.constituencyId == ValueURL){
                        //     finalData.push(element);
                        // }
                    }
                })
                console.log("new DATA : " + finalData);
                return finalData;
            }
            
            return data;
        }
    },
    columns: [
        { data: 'booth.boothWard.gramPanchayat.mandal.mandalName', defaultContent: 'N/A'},
        { data: 'booth.boothWard.gramPanchayat.gramPanchayatName', defaultContent: 'N/A'}, //GRAM PANCHAYAT CHANGE !!!!!!!
        { data: 'booth.boothWard.municipality.municipalityName', defaultContent: 'N/A'},
        { data: 'booth.boothWard.wardName'},
        { data: 'booth.boothName' },
        { data: 'colony.colonyName', defaultContent: 'N/A'},
        { data: 'apartment.apartmentName', defaultContent: 'N/A' },
        { data: 'community.communityName' },
        { data: 'category.categoryName' },
        { data: 'caste.casteName' },
        { data: 'ageGroup.ageGroupName' },
        { data: 'noOfVoters' }
    ],
    "columnDefs": [ {
        "targets": [0,1,2,3,4,5,6,7,8,9,10,11],
        "createdCell": function (td, cellData, rowData, row, col) {
            $(td).css('background-color', 'rgb(241, 234, 222)');
            // $(td).css('width', '99px');
            // $(td).hover(function () {
            //     $(this).css('background-color', 'rgb(230, 207, 163)');
            //     // $(this).css('--bs-table-hover-bg', 'transparent');
            // }, function () {
            //     $(this).css('background-color', 'rgb(241, 234, 222)');
            //     // $(this).css('--bs-table-hover-bg', 'transparent');
            // });
        },
        // "width" : "99px"
      }],
    initComplete: function () {
        getConstituencies();
        let filteredData = [];
        this.api()
            .columns()
            .every(function () {
                let column = this;

                if(column.index() !== 11){
                // Create select element
                let select = document.createElement('select');
                select.add(new Option(''));
                column.footer().replaceChildren(select);
 
                // Apply listener for user change in value
                select.addEventListener('change', function () {
                    var val = DataTable.util.escapeRegex(select.value);

                    column
                        .search(val ? '^' + val + '$' : '', true, false)
                        .draw();
                });
 
                // Add list of options
                column
                    .data()
                    .unique()
                    .sort()
                    .each(function (d, j) {
                        select.add(new Option(d));
                    });
                }
            });
    },
    rowGroup: {
        startRender: null,
        endRender: function (rows, group) {

        let votersData = rows.data().toArray().map(row => {
            return row.noOfVoters;
        });
                

                let totalVoters = votersData.reduce((sum, value) => sum + value, 0);

                totalVoters = DataTable.render.number(null, null, 0).display(totalVoters);
                let formattedTotalVoters = DataTable.render.number(null, null, 0).display(totalVoters);

            // Create the row group summary row
            let tr = document.createElement('tr');

            // Add cell for the group name (ward name in this case)
            addCell(tr, 'Total Voters ', 11);

            // Add cell for the total voters count
            addCell(tr, formattedTotalVoters);

            return tr;
        },
        // dataSrc: function (group) {
        //     // This function returns the dataSrc value for each row
        //     return group.booth.boothWard.wardName;
        // }
    }
});

function reloadTable(ValueURL){
    if(ValueURL != null){
        table.ajax.reload(null, true);
        console.log("loaded ...")
    }
};






// footerCallback: function (row, data, start, end, display) {
    //     fetch('http://localhost:8080/voterData/ward/aggregate')
    //         .then(response => response.json())
    //         .then(aggregateData => {
    //             // Log the fetched aggregateData
    //             console.log("Fetched Data in Footer Callback:", aggregateData);
    //         })
    //         .catch(error => {
    //             console.error("Error fetching data:", error);
    //             // Handle error scenario if necessary
    //         });
    // }


// if (column.index() === 0) {
                    //     filteredData = column
                    // .data()
                    // .filter(function (value, index) {
                    //     return value === val;
                    // })
                    // .map(function (value, index) {
                    //     return column.row(index).data().booth.boothWard.wardId;
                    // });
                    // console.log(filteredData[0]);
                    // let url = 'http://localhost:8080/voterData/ward/aggregate/' + filteredData[0];
                    // fetch(url)
                    // .then(response => response.json())
                    // .then(aggregateData => {
                    //     // Log the fetched aggregateData
                    //     console.log(aggregateData);
                    // });
                    // }

// document.addEventListener("DOMContentLoaded", function () {
//     const selectedConstituency = document.getElementById('constituency');


//     // Check if the element exists before adding the event listener
//     if (selectedConstituency) {
//         console.log("true");
//         selectedConstituency.addEventListener("change", function () {
//             const selectedConstituencyValue = selectedConstituency.value;
//             console.log("Selected Constituency:", selectedConstituencyValue);
//         });
//     }
//     else{
//         console.log("false")
//     }
    
//     // Rest of your DataTable and other code...
// });

