document.addEventListener("DOMContentLoaded", function () {
    const calendarEvents = [
      {
        date: '2026-05-01',
        startTime: '9:00 AM',
        endTime: '10:00 AM',
        type: 'Board',
        title: 'Lantana Firefighters’ Pension Fund Board of Trustees Quarterly Meeting',
        location: 'Palm Beach County Firefighters, 7240 7th Pl. N., West Palm Beach FL 33411',
        description: 'Lantana Firefighters\' Pension Fund. Pension Board of Trustees Quarterly Meeting. Lantana Firefighters’ Pension Fund Board of Trustees Quarterly Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-01',
        startTime: '9:00 AM',
        endTime: '11:30 AM',
        type: 'Hearing',
        title: 'EAB – Hearing',
        location: 'PBC Health Department - Rm 112, 800 Clematis, West Palm Beach FL',
        description: 'Florida Department of Health. EAB – Hearing',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-01',
        startTime: '10:30 AM',
        endTime: '12:30 PM',
        type: 'Public Notice',
        title: 'Regular Quarterly Meeting',
        location: 'PBC Firefighters Health Clinic, 7240 7th Pl N, West Palm Beach FL 33411',
        description: 'PBC Firefighter\'s Retirement Insurance Fund. Regular Quarterly Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-01',
        startTime: '11:00 AM',
        endTime: '1:00 PM',
        type: 'Public Notice',
        title: 'Regular Quarterly Meeting',
        location: 'PBC Firefighters Health Clinic, 7240 7th Pl N, West Palm Beach FL 33411',
        description: 'PBC Firefighter\'s Retirement Insurance Fund. Regular Quarterly Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-04',
        startTime: '3:00 PM',
        endTime: '5:00 PM',
        type: 'Board',
        title: 'BHSUCOD - SUB-COMMITTEE MEETING (Faith-Based)',
        location: 'Virtual Meeting',
        description: 'Community Services Department. Behavioral Health, Substance Use and Co-Occurring Disorder (BHSUCOD). BHSUCOD - SUB-COMMITTEE MEETING (Faith-Based)',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-04',
        startTime: '3:00 PM',
        endTime: '4:00 PM',
        type: 'Hearing',
        title: 'Pre-Termination Hearing Meeting',
        location: 'Department of Airports Building 846, 846 Palm Beach Int. Airport, West Palm Beach FL',
        description: 'Department of Airports. Pre-Termination Hearing Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-04',
        startTime: '5:00 PM',
        endTime: '7:00 PM',
        type: 'Board',
        title: 'BHSUCOD - SUB-COMMITTEE MEETING (Criminal Justice and Public Safety)',
        location: 'Virtual Meeting',
        description: 'Community Services Department. BHSUCOD - SUB-COMMITTEE MEETING (Criminal Justice and Public Safety)',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-04',
        startTime: '5:00 PM',
        endTime: '6:30 PM',
        type: 'Board',
        title: 'Board of Directors Meeting',
        location: 'Airport Center II - Dave Burke Boardroom, 2195 Southern Blvd - Suite 550, West Palm Beach FL 33406',
        description: 'Palm Beach County Sports Commission. Board of Directors Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-05',
        startTime: '9:00 AM',
        endTime: '12:00 PM',
        type: 'Board',
        title: 'Accident Review Board Hearing',
        location: 'Airport Center Complex - 1st Floor Training Room, 100 S. Australian Ave., West Palm Beach FL 33406',
        description: 'PBC Risk Management Department. Safety & Casualty. Accident Review Board Hearing',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-05',
        startTime: '9:30 AM',
        endTime: '5:00 PM',
        type: 'BCC',
        title: 'BCC Regular Meetings',
        location: 'Government Center - Jane M. Thompson Memorial Chambers - 6th Floor, 301 N Olive, West Palm Beach FL',
        description: 'Board of County Commissioners regular meeting. Matters by the public at 2:00 PM.',
        source: 'BCC Meeting Dates',
        detailsUrl: 'https://discover.pbc.gov/countycommissioners/Pages/Meeting-Dates.aspx'
      },
      {
        date: '2026-06-02',
        startTime: '9:30 AM',
        endTime: '5:00 PM',
        type: 'BCC',
        title: 'BCC Regular Meetings',
        location: 'Government Center - Jane M. Thompson Memorial Chambers - 6th Floor, 301 N Olive, West Palm Beach FL',
        description: 'Board of County Commissioners regular meeting.',
        source: 'BCC Meeting Dates',
        detailsUrl: 'https://discover.pbc.gov/countycommissioners/Pages/Meeting-Dates.aspx'
      },
      {
        date: '2026-06-09',
        startTime: '9:30 AM',
        endTime: '5:00 PM',
        type: 'BCC',
        title: 'BCC Regular Meetings',
        location: 'Government Center - Jane M. Thompson Memorial Chambers - 6th Floor, 301 N Olive, West Palm Beach FL',
        description: 'Board of County Commissioners regular meeting.',
        source: 'BCC Meeting Dates',
        detailsUrl: 'https://discover.pbc.gov/countycommissioners/Pages/Meeting-Dates.aspx'
      },
      {
        date: '2026-07-07',
        startTime: '9:30 AM',
        endTime: '5:00 PM',
        type: 'BCC',
        title: 'BCC Regular Meetings',
        location: 'Government Center - Jane M. Thompson Memorial Chambers - 6th Floor, 301 N Olive, West Palm Beach FL',
        description: 'Board of County Commissioners regular meeting.',
        source: 'BCC Meeting Dates',
        detailsUrl: 'https://discover.pbc.gov/countycommissioners/Pages/Meeting-Dates.aspx'
      },
      {
        date: '2026-09-01',
        startTime: '9:30 AM',
        endTime: '5:00 PM',
        type: 'BCC',
        title: 'BCC Regular Meetings',
        location: 'Government Center - Jane M. Thompson Memorial Chambers - 6th Floor, 301 N Olive, West Palm Beach FL',
        description: 'Board of County Commissioners regular meeting.',
        source: 'BCC Meeting Dates',
        detailsUrl: 'https://discover.pbc.gov/countycommissioners/Pages/Meeting-Dates.aspx'
      },
      {
        date: '2026-09-15',
        startTime: '9:30 AM',
        endTime: '5:00 PM',
        type: 'BCC',
        title: 'BCC Regular Meetings',
        location: 'Government Center - Jane M. Thompson Memorial Chambers - 6th Floor, 301 N Olive, West Palm Beach FL',
        description: 'Board of County Commissioners regular meeting.',
        source: 'BCC Meeting Dates',
        detailsUrl: 'https://discover.pbc.gov/countycommissioners/Pages/Meeting-Dates.aspx'
      },
      {
        date: '2026-10-06',
        startTime: '9:30 AM',
        endTime: '5:00 PM',
        type: 'BCC',
        title: 'BCC Regular Meetings',
        location: 'Government Center - Jane M. Thompson Memorial Chambers - 6th Floor, 301 N Olive, West Palm Beach FL',
        description: 'Board of County Commissioners regular meeting.',
        source: 'BCC Meeting Dates',
        detailsUrl: 'https://discover.pbc.gov/countycommissioners/Pages/Meeting-Dates.aspx'
      },
      {
        date: '2026-10-20',
        startTime: '9:30 AM',
        endTime: '5:00 PM',
        type: 'BCC',
        title: 'BCC Regular Meetings',
        location: 'Government Center - Jane M. Thompson Memorial Chambers - 6th Floor, 301 N Olive, West Palm Beach FL',
        description: 'Board of County Commissioners regular meeting.',
        source: 'BCC Meeting Dates',
        detailsUrl: 'https://discover.pbc.gov/countycommissioners/Pages/Meeting-Dates.aspx'
      },
      {
        date: '2026-11-10',
        startTime: '9:30 AM',
        endTime: '5:00 PM',
        type: 'BCC',
        title: 'BCC Regular Meetings',
        location: 'Government Center - Jane M. Thompson Memorial Chambers - 6th Floor, 301 N Olive, West Palm Beach FL',
        description: 'Board of County Commissioners regular meeting.',
        source: 'BCC Meeting Dates',
        detailsUrl: 'https://discover.pbc.gov/countycommissioners/Pages/Meeting-Dates.aspx'
      },
      {
        date: '2026-11-17',
        startTime: '9:30 AM',
        endTime: '5:00 PM',
        type: 'BCC',
        title: 'BCC Regular Meetings',
        location: 'Government Center - Jane M. Thompson Memorial Chambers - 6th Floor, 301 N Olive, West Palm Beach FL',
        description: 'Board of County Commissioners regular meeting.',
        source: 'BCC Meeting Dates',
        detailsUrl: 'https://discover.pbc.gov/countycommissioners/Pages/Meeting-Dates.aspx'
      },
      {
        date: '2026-12-01',
        startTime: '9:30 AM',
        endTime: '5:00 PM',
        type: 'BCC',
        title: 'BCC Regular Meetings',
        location: 'Government Center - Jane M. Thompson Memorial Chambers - 6th Floor, 301 N Olive, West Palm Beach FL',
        description: 'Board of County Commissioners regular meeting.',
        source: 'BCC Meeting Dates',
        detailsUrl: 'https://discover.pbc.gov/countycommissioners/Pages/Meeting-Dates.aspx'
      },
      {
        date: '2026-05-05',
        startTime: '10:00 AM',
        endTime: '11:30 AM',
        type: 'Public Notice',
        title: '2nd Tiny Homes Recovery Community-Based/Transitional Housing Pilot NOFO Technical Assistance Meeting',
        location: 'PBC Community Services - Basement Conf. Room, 810 Datura Street, West Palm Beach FL 33401',
        description: 'Community Services Department. Financially Assisted Agencies (FAA). 2nd Tiny Homes Recovery Community-Based/Transitional Housing Pilot NOFO Technical Assistance Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-05',
        startTime: '2:00 PM',
        endTime: '2:15 PM',
        type: 'Public Notice',
        title: 'Landscaping Continuing Services Construction Contract Project #2026055 Bid Opening Meeting',
        location: 'Vista Center - Engineering & Public Works Dept. Room - 3W-12, 2300 North Jog Road 3rd Floor Conference Room, West Palm Beach FL 33411',
        description: 'PBC Engineering & Public Works Department. Landscaping Continuing Services Construction Contract Project #2026055 Bid Opening Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-05',
        startTime: '3:00 PM',
        endTime: '5:00 PM',
        type: 'Board',
        title: 'BHSUCOD - SUB-COMMITTEE MEETING ((Essential Services)',
        location: 'Virtual Meeting',
        description: 'Community Services Department. BHSUCOD - SUB-COMMITTEE MEETING ((Essential Services)',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-05',
        startTime: '5:00 PM',
        endTime: '7:00 PM',
        type: 'Board',
        title: 'BHSUCOD - SUB-COMMITTEE MEETING (Evaluation and Monitoring)',
        location: 'Virtual Meeting',
        description: 'Community Services Department. BHSUCOD - SUB-COMMITTEE MEETING (Evaluation and Monitoring)',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-06',
        startTime: '8:45 AM',
        endTime: '10:15 AM',
        type: 'Board',
        title: 'Contract Review Committee',
        location: 'Vista Center - Engineering & Public Works Dept. Room - 3W-12, 2300 North Jog Road 3rd Floor Conference Room, West Palm Beach FL 33411',
        description: 'Office of Financial Management & Budget. Contract Development & Control. Contract Review Committee',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-06',
        startTime: '9:00 AM',
        endTime: '11:00 AM',
        type: 'Board',
        title: 'Southeast Florida Regional Climate Change Compact Leadership Committee discussion on HB1217',
        location: 'Virtual Meeting',
        description: 'FDO (BERR). Southeast Florida Regional Climate Change Compact Leadership Committee discussion on HB1217',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-06',
        startTime: '9:00 AM',
        endTime: '10:00 AM',
        type: 'Board',
        title: 'Youth and Young Adult Outreach Committee Meeting',
        location: 'CareerSource - Central Career Center, 3400 Belvedere Road, West Palm Beach FL 33406',
        description: 'CareerSource of PBC. Youth and Young Adult Outreach Committee Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-06',
        startTime: '9:45 AM',
        endTime: '11:45 AM',
        type: 'Board',
        title: '*CANCELED as of 04.13.2026* Monthly Board of Directors’ Meeting',
        location: 'Tourist Development Council - Dave Burke Board Room, 2195 Southern Boulevard Airport Center II, West Palm Beach FL 33406',
        description: 'Palm Beach County Film and Television Commission. Board of Directors. *CANCELED as of 04.13.2026* Monthly Board of Directors’ Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-06',
        startTime: '12:00 PM',
        endTime: '1:00 PM',
        type: 'Board',
        title: 'Public Safety Coordinating Council',
        location: 'Mc Eaddy Conference Room - Governmental Center, 301 N Olive Ave 12th Floor, West Palm Beach FL 33401',
        description: 'Department of Public Safety. Public Safety Coordinating Council',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-06',
        startTime: '1:00 PM',
        endTime: '4:30 PM',
        type: 'Board',
        title: 'BHSUCOD - SUB-COMMITTEE MEETING (Evaluation and Monitoring)',
        location: 'Virtual Meeting',
        description: 'Community Services Department. BHSUCOD - SUB-COMMITTEE MEETING (Evaluation and Monitoring)',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-06',
        startTime: '3:00 PM',
        endTime: '5:00 PM',
        type: 'Board',
        title: 'BHSUCOD - SUB-COMMITTEE MEETING (Prevention & Education)',
        location: 'Virtual Meeting',
        description: 'Community Services Department. BHSUCOD - SUB-COMMITTEE MEETING (Prevention & Education)',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-06',
        startTime: '3:30 PM',
        endTime: '4:30 PM',
        type: 'Board',
        title: 'Office of Small Business Development Goal Setting Committee',
        location: 'Four Points Building - Room 1N-142 1st Floor, 50 S. Military Trail, West Palm Beach FL 33415',
        description: '',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-07',
        startTime: '9:00 AM',
        endTime: '5:00 PM',
        type: 'Zoning',
        title: 'Zoning Commission',
        location: 'Vista Center - Chambers, 2300 North Jog Road, West Palm Beach FL 33411',
        description: 'PZB/ Planning Division. Zoning Commission',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://discover.pbc.gov/pzb/Lists/MeetingsCal/zoning.aspx'
      },
      {
        date: '2026-05-07',
        startTime: '9:00 AM',
        endTime: '10:00 AM',
        type: 'Board',
        title: 'Youth & Young Adult Outreach Committee *RESCHEDULED to 05.06.2026*',
        location: 'CareerSource Palm Beach County, 3400 Belvedere Road, West Palm Beach FL 33406',
        description: 'CareerSource of PBC. Youth & Young Adult Outreach Committee. *RESCHEDULED to 05.06.2026*',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-07',
        startTime: '10:00 AM',
        endTime: '12:00 PM',
        type: 'Public Notice',
        title: '2nd Tiny Homes Recovery Community-Based/Transitional Housing Pilot NOFO Technical Assistance Meeting',
        location: 'PBC Community Services - Basement Conf. Room, 810 Datura Street, West Palm Beach FL 33401',
        description: 'Community Services Department. Financially Assisted Agencies (FAA). 2nd Tiny Homes Recovery Community-Based/Transitional Housing Pilot NOFO Technical Assistance Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-07',
        startTime: '1:30 PM',
        endTime: '5:00 PM',
        type: 'Board',
        title: 'Commission on Ethics Monthly Meeting',
        location: 'Robert Weisman Government Center - Jane M. Thompson Memorial Chambers, 301 N Olive Ave 6th Fl, West Palm Beach FL 33401',
        description: 'Commission on Ethics Monthly Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-07',
        startTime: '2:00 PM',
        endTime: '4:00 PM',
        type: 'Board',
        title: 'General Committee Meeting',
        location: 'Robert Weisman Government Center - Jane M. Thompson Memorial Chambers, 301 N Olive Ave 6th Fl, West Palm Beach FL 33401',
        description: 'Inspector General. General Committee Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-07',
        startTime: '2:00 PM',
        endTime: '4:00 PM',
        type: 'Planning',
        title: 'Countywide Transportation Master Plan (CTMP)',
        location: 'Agricultural Center - 559 N. Military Trail, West Palm Beach FL',
        description: 'PZB/ Planning Division. Palm Beach County Countywide Transportation Master Plan (IPARC 2.0+ Project Steering Committee - Tec. Countywide Transportation Master Plan (CTMP)',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://discover.pbc.gov/pzb/planning/Pages/BCC-Agendas-Minutes.aspx'
      },
      {
        date: '2026-05-07',
        startTime: '4:00 PM',
        endTime: '4:45 PM',
        type: 'Public Notice',
        title: 'IFB F26-0122R/JJ DIETARY AND NUTRITON CONSULTING SERVICES, TERM CONTRACT',
        location: 'Four Points Complex - Suite 1N-142, 50 S Military Trl, West Palm Beach FL',
        description: 'Community Services Department. IFB F26-0122R/JJ DIETARY AND NUTRITON CONSULTING SERVICES, TERM CONTRACT',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-08',
        startTime: '9:00 AM',
        endTime: '1:00 PM',
        type: 'Planning',
        title: 'Planning Commission',
        location: 'PZB Depart - 1W-47, 2300 N. Jog Road, West Palm Beach FL 33411',
        description: 'PZB/ Planning Division. Planning Commission',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://discover.pbc.gov/pzb/planning/Pages/BCC-Agendas-Minutes.aspx'
      },
      {
        date: '2026-05-08',
        startTime: '1:00 PM',
        endTime: '3:00 PM',
        type: 'Board',
        title: 'Hearing Review',
        location: 'Children\'s Services Council - A.A. Milne Rm, 2300 High Ridge Rd, Boynton Beach FL 33426',
        description: 'Early Learning Coalition of Palm Beach County. Hearing Review Committee. Hearing Review',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-12',
        startTime: '10:00 AM',
        endTime: '11:30 AM',
        type: 'Public Notice',
        title: '211 - How Can 211 Help You?',
        location: 'Vista Center - 1E-60, 2300 N Jog Rd, West Palm Beach FL 33411',
        description: 'Office of Community Revitalization. Countywide Community Revitalization Team Meeting. 211 - How Can 211 Help You?',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-13',
        startTime: '8:45 AM',
        endTime: '10:15 AM',
        type: 'Board',
        title: 'Contract Review Committee',
        location: 'Vista Center - Engineering & Public Works Dept. Room - 3W-12, 2300 North Jog Road 3rd Floor Conference Room, West Palm Beach FL 33411',
        description: 'Office of Financial Management & Budget. Contract Development & Control. Contract Review Committee',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-13',
        startTime: '11:00 AM',
        endTime: '1:00 PM',
        type: 'Board',
        title: 'Regular Meeting-Community Action Advisory Board (CAAB)',
        location: 'Vista Center - 1st Floor Conference Room 1E-58/59, 2300 N Jog Rd, West Palm Beach FL',
        description: 'Community Services Department. Community Action Program. Regular Meeting-Community Action Advisory Board (CAAB)',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-13',
        startTime: '12:00 PM',
        endTime: '5:15 PM',
        type: 'Board',
        title: 'PSCC',
        location: 'Robert Weisman Government Center - McEaddy Conference Room, 12th Floor, 301 N Olive Ave, West Palm Beach FL 33401',
        description: 'Department of Public Safety. Criminal Justice Commission. PSCC',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-13',
        startTime: '2:30 PM',
        endTime: '4:00 PM',
        type: 'Board',
        title: 'AEC Meeting',
        location: 'PBC Vista Center, 2300 North Jog Road, West Palm Beach FL',
        description: 'Cooperative Extension Service. Agriculture Enhancement Council. AEC Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-14',
        startTime: '9:00 AM',
        endTime: '11:00 AM',
        type: 'Board',
        title: 'Regular Meeting @ 2300 Jog Rd, West Palm Beach, FL 33411',
        location: 'PBC Vista Center, 2300 North Jog Road, West Palm Beach FL',
        description: 'Citizens Advisory Committee (CAC/HHS). Regular Meeting @ 2300 Jog Rd, West Palm Beach, FL 33411',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-14',
        startTime: '9:00 AM',
        endTime: '11:00 AM',
        type: 'Board',
        title: 'Tourist Development Council Board Meeting',
        location: 'Tourist Development Council - Dave Burke Board Room, 2195 Southern Boulevard Airport Center II, West Palm Beach FL 33406',
        description: 'Tourist Development Council. Board Meeting. Board Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-14',
        startTime: '3:00 PM',
        endTime: '5:00 PM',
        type: 'Board',
        title: 'Early Leaning Coalition of Palm Beach County Board of Directors Meeting ',
        location: 'Virtual Meeting',
        description: '',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-15',
        startTime: '1:00 PM',
        endTime: '4:00 PM',
        type: 'Board',
        title: 'Finalist Selection, Cam D. Milani Park',
        location: '2633 Vista Parkway - 1W-55 Training Room, 2633 Vista Parkway, West Palm Beach FL',
        description: 'FDO/Art in Public Places. Public Art Committee. Finalist Selection, Cam D. Milani Park',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-15',
        startTime: '1:30 PM',
        endTime: '4:30 PM',
        type: 'Board',
        title: 'Natural Areas Management Advisory Committee Meeting',
        location: 'Vista Center - Rm VC-1W-47, 2300 N. Jog Rd, West Palm Beach FL 33411',
        description: 'Environmental Resources Management/Natural Resources Steward. Natural Areas Management Advisory Committee (NAMAC). Natural Areas Management Advisory Committee Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-18',
        startTime: '5:00 PM',
        endTime: '6:30 PM',
        type: 'Board',
        title: 'Palm Beach County Sports Commission',
        location: 'Airport Center II - Dave Burke Boardroom, 2195 Southern Blvd - Suite 550, West Palm Beach FL 33406',
        description: 'Palm Beach County Sports Commission. Executive Committee Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-19',
        startTime: '9:30 AM',
        endTime: '11:30 AM',
        type: 'Board',
        title: '*RESCHEDULED to 06/02/2026* on 03/09/2026 Criminal Justice Commission Ordinance Revision',
        location: 'Government Center - Jane M. Thompson Memorial Chambers - 6th Floor, 301 N Olive, West Palm Beach FL',
        description: 'Department of Public Safety. Criminal Justice Commission. *RESCHEDULED to 06/02/2026* on 03/09/2026 Criminal Justice Commission Ordinance Revision',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-19',
        startTime: '9:30 AM',
        endTime: '5:00 PM',
        type: 'BCC',
        title: 'BOARD OF COUNTY COMMISSIONERS WORKSHOP MEETING',
        location: 'Government Center - Jane M. Thompson Memorial Chambers - 6th Floor, 301 N Olive, West Palm Beach FL',
        description: 'BOARD OF COUNTY COMMISSIONERS WORKSHOP MEETING',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://discover.pbc.gov/countycommissioners/Pages/Agenda.aspx'
      },
      {
        date: '2026-05-19',
        startTime: '10:00 AM',
        endTime: '11:30 AM',
        type: 'Board',
        title: 'Wellness',
        location: 'PBC Fire Rescue Headquarters WPB - 2nd Fl, Everglades Room, 405 Pike Road, West Palm Beach FL 33411',
        description: 'Palm Beach County Firefighter\'s Employee Benefits Fund. Wellness Steering Committee. Wellness',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-19',
        startTime: '12:00 PM',
        endTime: '1:00 PM',
        type: 'Board',
        title: 'Probation Advisory Board meeting',
        location: 'Government Center - CJC - 10th Floor Conference Room, 301 N Olive Ave Room 1001, West Palm Beach FL 33401',
        description: 'Department of Public Safety. Criminal Justice Commission. Probation Advisory Board meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-20',
        startTime: '8:45 AM',
        endTime: '10:15 AM',
        type: 'Board',
        title: 'Contract Review Committee',
        location: 'Vista Center - Engineering & Public Works Dept. Room - 3W-12, 2300 North Jog Road 3rd Floor Conference Room, West Palm Beach FL 33411',
        description: 'Office of Financial Management & Budget. Contract Development & Control. Contract Review Committee',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-20',
        startTime: '10:00 AM',
        endTime: '11:30 AM',
        type: 'Public Notice',
        title: 'Community Engagement Task Force Meeting',
        location: 'Mc Eaddy Conference Room - Governmental Center, 301 N Olive Ave 12th Floor, West Palm Beach FL 33401',
        description: 'Department of Public Safety. Community Engagement Task Force Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-20',
        startTime: '12:00 PM',
        endTime: '1:00 PM',
        type: 'Board',
        title: 'Probation Advisory Board (PAB) Meeting',
        location: 'Government Center - CJC - 10th Floor Conference Room, 301 N Olive Ave Room 1001, West Palm Beach FL 33401',
        description: 'Department of Public Safety. Probation Advisory Board (PAB) Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-20',
        startTime: '3:30 PM',
        endTime: '4:30 PM',
        type: 'Board',
        title: 'Office of Small Business Development. Goal Setting Committee',
        location: 'Four Points Building - Room 1N-142 1st Floor, 50 S. Military Trail, West Palm Beach FL 33415',
        description: '',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-21',
        startTime: '9:00 AM',
        endTime: '11:00 AM',
        type: 'Board',
        title: 'EMS Advisory Council',
        location: 'Emergency Operations Center (EOC), 20 S Military Trl, West Palm Beach FL',
        description: 'Public Safety/ Division of Emergency Management. EMS Advisory Council. EMS Advisory Council',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-21',
        startTime: '9:00 AM',
        endTime: '1:00 PM',
        type: 'Board',
        title: 'Regular Board Meeting',
        location: 'PBC Firefighters Health Clinic, 7240 7th Pl N, West Palm Beach FL 33411',
        description: 'PBC Firefighters Employee Benefits Fund. Regular Board Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-21',
        startTime: '10:00 AM',
        endTime: '11:30 AM',
        type: 'Board',
        title: 'Infrastructure Sales Tax Oversight Committee Meeting',
        location: 'PBC Vista Office Building - 1st Floor Ken Rogers Memorial Chambers, 2300 N Jog rd, West Palm Beach FL 33411',
        description: 'Office of Financial Management & Budget. Infrastructure Sales Tax Oversight Committee. Infrastructure Sales Tax Oversight Committee Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-21',
        startTime: '10:00 AM',
        endTime: '12:00 PM',
        type: 'Board',
        title: 'Regular Meeting',
        location: 'PB International Airport (PBIA) Bldg, 846 - Main Conf. Room 108, 1000 James L Turnage Blvd., West Palm Beach FL 33415',
        description: 'Department of Airports. Citizens\' Committee on Airport Noise (CCAN). Regular Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-21',
        startTime: '10:30 AM',
        endTime: '1:00 PM',
        type: 'Board',
        title: 'Palm Beach County Capital Financings & Related Matters',
        location: 'Robert Weisman Government Center - OFMB Conf. Room, 7th Floor, 301 N Olive Ave, West Palm Beach FL',
        description: 'Office of Financial Management & Budget. County Finance Committee (CFC). Palm Beach County Capital Financings & Related Matters',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-21',
        startTime: '10:30 AM',
        endTime: '11:30 AM',
        type: 'Board',
        title: 'Adaptive Reuse',
        location: 'PBC Commission on Affordable Housing - Remar Harvin Conf. Rm - 5th Floor, 100 S. Australian Ave, West Palm Beach FL 33406',
        description: 'Department of Housing & Economic Development. Commission on Affordable Housing. Adaptive Reuse',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-21',
        startTime: '1:00 PM',
        endTime: '3:00 PM',
        type: 'Public Notice',
        title: 'Regular Monthly Meeting',
        location: 'PBC Firefighters Health Clinic, 7240 7th Pl N, West Palm Beach FL 33411',
        description: 'Palm Beach County Firefighter\'s Health Clinic, LLC. Regular Monthly Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-21',
        startTime: '1:00 PM',
        endTime: '4:00 PM',
        type: 'Board',
        title: 'Shortlist Selection, North County Aquatic Center',
        location: '2633 Vista Parkway - 1W-55 Training Room, 2633 Vista Parkway, West Palm Beach FL',
        description: 'FDO/Art in Public Places. Public Art Committee. Shortlist Selection, North County Aquatic Center',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-21',
        startTime: '2:00 PM',
        endTime: '4:30 PM',
        type: 'Board',
        title: 'Palm Beach County’s Investment Policy & Investments',
        location: 'Robert Weisman Government Center - OFMB Conf. Room, 7th Floor, 301 N Olive Ave, West Palm Beach FL',
        description: 'Office of Financial Management & Budget. Investment Policy Committee. Palm Beach County’s Investment Policy & Investments',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-21',
        startTime: '2:00 PM',
        endTime: '4:00 PM',
        type: 'Board',
        title: 'Committee Agenda',
        location: 'PBC Firefighters Health Clinic, 7240 7th Pl. N., West Palm Beach FL 33411',
        description: 'PBC Firefighters Employee Benefit Fund. Committee Agenda',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-21',
        startTime: '3:00 PM',
        endTime: '5:00 PM',
        type: 'Board',
        title: 'Early Leaning Coalition of Palm Beach County Board of Directors Meeting',
        location: 'Virtual Meeting',
        description: '',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-21',
        startTime: '6:55 PM',
        endTime: '7:00 PM',
        type: 'Board',
        title: 'Public Hearing - Final Assessment of 17213 Bush Road',
        location: 'Loxahatchee River District - Boardroom, 2500 Jupiter Park Drive, Jupiter FL 33458',
        description: 'Loxahatchee River District. LRD Monthly Board Meeting. Public Hearing - Final Assessment of 17213 Bush Road',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-21',
        startTime: '7:00 PM',
        endTime: '8:00 PM',
        type: 'Board',
        title: 'LRD 2026 Board Meetings LRD Board Room, 2500 Jupiter Park Dr., Jupiter, FL 33458 The Loxahatchee River Environmental Control District 2026 meeting schedule: Board Meeting at 7:00pm on: January 15, 2026, February 19, 2026, March 19, 2026, April 16, 2026, May 21, 2026, June 18, 2026, July 16, 2026, August 20, 2026, September 17, 2026, October 15, 2026, November 19, 2026, December 17, 2026.',
        location: 'Loxahatchee River District Administrative Bldg, 2500 Jupiter Park Drive, Jupiter FL 33458',
        description: 'Loxahatchee River District Board Meeting. LRD 2026 Board Meetings LRD Board Room, 2500 Jupiter Park Dr., Jupiter, FL 33458 The Loxahatchee River Environmental Control District 2026 meeting schedule: Board Meeting at 7:00pm on: January 15, 2026, February 19, 2026, March 19, 2026, April 16, 2026, May 21, 2026, June 18, 2',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-27',
        startTime: '8:45 AM',
        endTime: '10:15 AM',
        type: 'Board',
        title: 'Contract Review Committee',
        location: 'Vista Center - Engineering & Public Works Dept. Room - 3W-12, 2300 North Jog Road 3rd Floor Conference Room, West Palm Beach FL 33411',
        description: 'Office of Financial Management & Budget. Contract Development & Control. Contract Review Committee',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-27',
        startTime: '4:00 PM',
        endTime: '5:00 PM',
        type: 'Board',
        title: 'Cooperative Extension Service',
        location: 'Agricultural Center - 559 N. Military Trail, West Palm Beach FL',
        description: 'Cooperative Extension Service. Friends of Mounts Botanical Garden Board of Directors Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-28',
        startTime: '9:30 AM',
        endTime: '1:30 PM',
        type: 'Zoning',
        title: 'BCC ZONING HEARING',
        location: 'Robert Weisman Government Center - Jane M. Thompson Memorial Chambers, 301 N Olive Ave 6th Fl, West Palm Beach FL 33401',
        description: 'BCC ZONING HEARING',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://discover.pbc.gov/pzb/Lists/MeetingsCal/zoning.aspx'
      },
      {
        date: '2026-05-28',
        startTime: '9:30 AM',
        endTime: '11:30 AM',
        type: 'Hearing',
        title: 'ECHB – Prehearing Conference',
        location: 'PBC Health Department - Rm 112, 800 Clematis, West Palm Beach FL',
        description: 'Florida Department of Health. ECHB – Prehearing Conference',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-28',
        startTime: '1:00 PM',
        endTime: '5:00 PM',
        type: 'Public Notice',
        title: 'Palm Beach Soil & Water Conservation District',
        location: 'USDA Conference Center, 420 S Sr7, Royal Palm Beach FL',
        description: 'Palm Beach Soil & Water Conservation District',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      },
      {
        date: '2026-05-29',
        startTime: '9:30 AM',
        endTime: '10:30 AM',
        type: 'Board',
        title: 'Palm Beach County Water Utilities',
        location: 'PBC Water Utilities Department - Customer Service Building, 9045 Jog Road, Boynton Beach FL 33437',
        description: 'Palm Beach County Water Utilities. Advisory Board Meeting',
        source: 'Public Notice Meeting Calendar',
        detailsUrl: 'https://pbc.gov/cal/event/PrintReport'
      }
    ];

    const bccMeetingLocation = 'Government Center - Jane M. Thompson Memorial Chambers - 6th Floor, 301 N Olive, West Palm Beach FL';
    const bccMeetingDetailsUrl = 'https://discover.pbc.gov/countycommissioners/Pages/Meeting-Dates.aspx';
    const bccMeetingDateEvents = [
      { date: '2026-01-06', type: 'Regular Meetings', title: 'Regular Meeting', description: 'Regular Board of County Commissioners meeting.' },
      { date: '2026-02-03', type: 'Regular Meetings', title: 'Regular Meeting', description: 'Regular Board of County Commissioners meeting.' },
      { date: '2026-03-03', type: 'Regular Meetings', title: 'Regular Meeting', description: 'Regular Board of County Commissioners meeting.' },
      { date: '2026-03-10', type: 'Regular Meetings', title: 'Regular Meeting', description: 'Regular Board of County Commissioners meeting.' },
      { date: '2026-04-14', type: 'Regular Meetings', title: 'Regular Meeting', description: 'Regular Board of County Commissioners meeting.' },
      { date: '2026-04-21', type: 'Regular Meetings', title: 'Regular Meeting', description: 'Regular Board of County Commissioners meeting.' },
      { date: '2026-05-05', type: 'Regular Meetings', title: 'Regular Meeting', description: 'Regular meeting with matters by the public at 2:00 PM.' },
      { date: '2026-06-02', type: 'Regular Meetings', title: 'Regular Meeting', description: 'Regular Board of County Commissioners meeting.' },
      { date: '2026-06-09', type: 'Regular Meetings', title: 'Regular Meeting', description: 'Regular Board of County Commissioners meeting.' },
      { date: '2026-07-07', type: 'Regular Meetings', title: 'Regular Meeting', description: 'Regular Board of County Commissioners meeting.' },
      { date: '2026-09-01', type: 'Regular Meetings', title: 'Regular Meeting', description: 'Regular Board of County Commissioners meeting.' },
      { date: '2026-09-15', type: 'Regular Meetings', title: 'Regular Meeting', description: 'Regular Board of County Commissioners meeting.' },
      { date: '2026-10-06', type: 'Regular Meetings', title: 'Regular Meeting', description: 'Regular Board of County Commissioners meeting.' },
      { date: '2026-10-20', type: 'Regular Meetings', title: 'Regular Meeting', description: 'Regular Board of County Commissioners meeting.' },
      { date: '2026-11-10', type: 'Regular Meetings', title: 'Regular Meeting', description: 'Regular Board of County Commissioners meeting.' },
      { date: '2026-11-17', type: 'Regular Meetings', title: 'Regular Meeting', description: 'Regular Board of County Commissioners meeting.' },
      { date: '2026-12-01', type: 'Regular Meetings', title: 'Regular Meeting', description: 'Regular Board of County Commissioners meeting.' },
      { date: '2026-01-27', type: 'Workshops', title: 'Workshop', description: 'Workshop meeting. Cancelled.' },
      { date: '2026-02-04', type: 'Workshops', title: 'Budget Workshop', description: 'Budget workshop meeting.' },
      { date: '2026-02-10', type: 'Workshops', title: 'Workshop', description: 'Workshop meeting.' },
      { date: '2026-03-24', type: 'Workshops', title: 'Workshop', description: 'Workshop meeting.' },
      { date: '2026-04-28', type: 'Workshops', title: 'Workshop', description: 'Workshop meeting.' },
      { date: '2026-05-19', type: 'Workshops', title: 'Workshop', description: 'Workshop meeting.' },
      { date: '2026-06-16', type: 'Workshops', title: 'Workshop', description: 'Workshop meeting.' },
      { date: '2026-07-14', type: 'Workshops', title: 'Workshop', description: 'Workshop meeting.' },
      { date: '2026-09-29', type: 'Workshops', title: 'Workshop', description: 'Workshop meeting.' },
      { date: '2026-10-27', type: 'Workshops', title: 'Workshop', description: 'Workshop meeting.' },
      { date: '2026-11-24', type: 'Workshops', title: 'Workshop', description: 'Workshop meeting.' },
      { date: '2026-12-08', type: 'Workshops', title: 'Workshop', description: 'Workshop meeting.' },
      { date: '2026-01-22', type: 'Zoning Hearings', title: 'Zoning Hearing', description: 'Public zoning hearing.' },
      { date: '2026-02-26', type: 'Zoning Hearings', title: 'Zoning Hearing', description: 'Public zoning hearing.' },
      { date: '2026-03-26', type: 'Zoning Hearings', title: 'Zoning Hearing', description: 'Public zoning hearing.' },
      { date: '2026-04-23', type: 'Zoning Hearings', title: 'Zoning Hearing', description: 'Public zoning hearing.' },
      { date: '2026-05-28', type: 'Zoning Hearings', title: 'Zoning Hearing', description: 'Public zoning hearing.' },
      { date: '2026-06-17', type: 'Zoning Hearings', title: 'Zoning Hearing', description: 'Public zoning hearing.' },
      { date: '2026-07-15', type: 'Zoning Hearings', title: 'Zoning Hearing', description: 'Public zoning hearing.' },
      { date: '2026-08-27', type: 'Zoning Hearings', title: 'Zoning Hearing', description: 'Public zoning hearing.' },
      { date: '2026-09-24', type: 'Zoning Hearings', title: 'Zoning Hearing', description: 'Public zoning hearing.' },
      { date: '2026-10-22', type: 'Zoning Hearings', title: 'Zoning Hearing', description: 'Public zoning hearing.' },
      { date: '2026-11-18', type: 'Zoning Hearings', title: 'Zoning Hearing', description: 'Public zoning hearing.' },
      { date: '2026-12-16', type: 'Zoning Hearings', title: 'Zoning Hearing', description: 'Public zoning hearing.' },
      { date: '2026-02-04', type: 'Comprehensive Plan Hearings', title: 'Comprehensive Plan Hearing', description: 'Comprehensive plan hearing.' },
      { date: '2026-04-29', type: 'Comprehensive Plan Hearings', title: 'Comprehensive Plan Hearing', description: 'Comprehensive plan hearing.' },
      { date: '2026-08-26', type: 'Comprehensive Plan Hearings', title: 'Comprehensive Plan Hearing', description: 'Comprehensive plan hearing.' },
      { date: '2026-10-28', type: 'Comprehensive Plan Hearings', title: 'Comprehensive Plan Hearing', description: 'Comprehensive plan hearing.' }
    ];

    function normalizeBccMeetingDateCategory(event) {
      const title = String(event.title || '').toLowerCase();

      if (event.source === 'BCC Meeting Dates' || title.includes('bcc regular meetings')) {
        event.type = 'Regular Meetings';
        event.title = 'Regular Meeting';
        event.description = event.description && event.description.toLowerCase().includes('matters by the public')
          ? 'Regular meeting with matters by the public at 2:00 PM.'
          : 'Regular Board of County Commissioners meeting.';
        event.detailsUrl = bccMeetingDetailsUrl;
        return;
      }

      if (title.includes('board of county commissioners workshop')) {
        event.type = 'Workshops';
        event.title = 'Workshop';
        event.description = 'Workshop meeting.';
        event.source = 'BCC Meeting Dates';
        event.detailsUrl = bccMeetingDetailsUrl;
        return;
      }

      if (title.includes('bcc zoning hearing')) {
        event.type = 'Zoning Hearings';
        event.title = 'Zoning Hearing';
        event.description = 'Public zoning hearing.';
        event.source = 'BCC Meeting Dates';
        event.detailsUrl = bccMeetingDetailsUrl;
      }
    }

    function getMeetingStatusPatterns() {
      return [
        /\*?\b(?:CANCELLED|CANCELED)(?:\s+as of\s+[\d./-]+)?\*?/gi,
        /\*?\bPOSTPONED(?:\s+(?:to|until|as of|on)\s+[\d./-]+)?\*?/gi,
        /\*?\bRESCHEDULED(?:\s+to\s+[\d./-]+)?\*?(?:\s+on\s+[\d./-]+)?/gi
      ];
    }

    function formatMeetingStatusLabel(value) {
      return String(value || '')
        .replace(/\*/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/cancelled|canceled/i, 'Cancelled')
        .replace(/postponed/i, 'Postponed')
        .replace(/rescheduled/i, 'Rescheduled');
    }

    function getMeetingStatus(value) {
      const text = String(value || '');
      const patterns = getMeetingStatusPatterns();

      for (const pattern of patterns) {
        const match = text.match(pattern);
        if (match) return formatMeetingStatusLabel(match[0]);
      }

      return '';
    }

    function cleanMeetingStatusText(value) {
      let text = String(value || '');

      getMeetingStatusPatterns().forEach(pattern => {
        text = text.replace(pattern, '');
      });

      return text
        .replace(/\s+on\s+[\d./-]+\s+/i, ' ')
        .replace(/\s{2,}/g, ' ')
        .replace(/\s+([.,;:])/g, '$1')
        .replace(/\.\s*\./g, '.')
        .replace(/^\s*[.,;:-]\s*/, '')
        .trim();
    }

    function normalizeMeetingStatus(event) {
      const status = getMeetingStatus(`${event.title || ''} ${event.description || ''}`);
      if (!status) return;

      event.status = status;
      event.title = cleanMeetingStatusText(event.title);
      event.description = cleanMeetingStatusText(event.description);
    }

    calendarEvents.forEach(normalizeBccMeetingDateCategory);

    const existingBccMeetingDates = new Set(
      calendarEvents
        .filter(event => ['regular meetings', 'workshops', 'zoning hearings', 'comprehensive plan hearings'].includes(event.type.toLowerCase()))
        .map(event => `${event.date}|${event.type.toLowerCase()}`)
    );

    bccMeetingDateEvents.forEach(event => {
      const eventKey = `${event.date}|${event.type.toLowerCase()}`;
      if (existingBccMeetingDates.has(eventKey)) return;

      calendarEvents.push({
        ...event,
        startTime: '9:30 AM',
        endTime: '5:00 PM',
        location: bccMeetingLocation,
        source: 'BCC Meeting Dates',
        detailsUrl: bccMeetingDetailsUrl
      });
    });

    calendarEvents.forEach(normalizeMeetingStatus);
  
  const calendarGrid = document.getElementById('calendarEventsGrid');
  const calendarMonthGrid = document.getElementById('calendarMonthGrid');
  const calendarFeaturedEvent = document.getElementById('calendarFeaturedEvent');
  const calendarSelectedDateHeading = document.getElementById('calendarSelectedDateHeading');
  const calendarResultsCount = document.getElementById('calendarResultsCount');
  const calendarEventCount = document.getElementById('calendarEventCount');
  const calendarTypeButtons = document.querySelectorAll('[data-calendar-type]');
  const calendarMonthHeading = document.getElementById('calendarMonthHeading');
  const calendarPreviousMonth = document.getElementById('calendarPreviousMonth');
  const calendarNextMonth = document.getElementById('calendarNextMonth');
  const calendarPager = document.querySelector('[data-calendar-pager]');
  const calendarYear = 2026;
  const firstCalendarMonth = 0;
  const lastCalendarMonth = 11;
  const resultsPageSize = 8;
  const annualMeetingCategories = ['regular meetings', 'workshops', 'zoning hearings', 'comprehensive plan hearings'];
  let displayedMonth = 4;
  let selectedDate = null;
  let selectedType = 'all';
  let currentResultsPage = 1;
  let featuredIndex = 0;
  let featuredScope = 'month';
  let featuredTimer = null;
  let featuredPaused = false;
  const featuredIntervalMs = 7000;
  
    function escapeHtml(value) {
      return String(value || '').replace(/[&<>"']/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      }[character]));
    }
  
    function toDate(value) {
      return new Date(`${value}T00:00:00`);
    }
  
    function toCalendarDate(date, time) {
      const [clock, period] = time.split(' ');
      const [hourValue, minuteValue] = clock.split(':').map(Number);
      let hour = hourValue;
  
      if (period === 'PM' && hour !== 12) {
        hour += 12;
      }
  
      if (period === 'AM' && hour === 12) {
        hour = 0;
      }
  
      return new Date(`${date}T${String(hour).padStart(2, '0')}:${String(minuteValue).padStart(2, '0')}:00-04:00`);
    }
  
    function formatCalendarDate(date) {
      return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    }
  
    function createIcsHref(event) {
      const start = formatCalendarDate(toCalendarDate(event.date, event.startTime));
      const end = formatCalendarDate(toCalendarDate(event.date, event.endTime));
      const description = event.description || `View the full public calendar at https://pbc.gov/cal/event/fullcalendar?ViewType=P`;
      const ics = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Palm Beach County//Calendar Events//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'BEGIN:VEVENT',
        `UID:${event.date}-${event.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}@pbc.gov`,
        `DTSTAMP:${formatCalendarDate(new Date())}`,
        `DTSTART:${start}`,
        `DTEND:${end}`,
        `SUMMARY:${event.title}`,
        `LOCATION:${event.location}`,
        `DESCRIPTION:${description}`,
        `URL:${event.detailsUrl || 'https://pbc.gov/cal/event/fullcalendar?ViewType=P'}`,
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\r\n');
  
      return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`;
    }

    function hasPhysicalLocation(event) {
      return event.location && !event.location.toLowerCase().includes('virtual');
    }

    function isVirtualEvent(event) {
      return event.type.toLowerCase() === 'virtual' || (event.location && event.location.toLowerCase().includes('virtual'));
    }

    function prefersAppleMaps() {
      return /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent);
    }

    function createMapHref(event, provider = prefersAppleMaps() ? 'apple' : 'google') {
      const query = encodeURIComponent(event.location);
      return provider === 'apple'
        ? `https://maps.apple.com/?q=${query}`
        : `https://www.google.com/maps/search/?api=1&query=${query}`;
    }

    function renderLocationAction(event) {
      if (isVirtualEvent(event)) {
        const virtualHref = event.virtualUrl || event.detailsUrl || 'https://pbc.gov/cal/event/PrintReport';

        return `
          <a href="${virtualHref}" class="calendar-location-action" aria-label="Join online for ${escapeHtml(event.title)}">
            <i class="fa-solid fa-video" aria-hidden="true"></i>
            <span>Join Online</span>
          </a>
        `;
      }

      if (!hasPhysicalLocation(event)) return '';

      return `
        <a href="${createMapHref(event)}" class="calendar-location-action" target="_blank" rel="noopener" aria-label="Get directions to ${escapeHtml(event.title)}">
          <i class="fa-solid fa-location-arrow" aria-hidden="true"></i>
          <span>Get Directions</span>
        </a>
      `;
    }

    function splitLocation(value) {
      const location = String(value || '').trim();
      if (!location) return { name: 'Location', address: '' };
      if (/^\d/.test(location) || isVirtualEvent({ type: '', location })) return { name: location, address: '' };

      const [name, ...addressParts] = location.split(',');
      return {
        name: name.trim(),
        address: addressParts.join(',').trim()
      };
    }

    function renderLocationMeta(event) {
      const location = splitLocation(event.location);
      return `
        <span class="calendar-location-meta">
          <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
          <span class="calendar-location-lines">
            <span class="calendar-location-name">${escapeHtml(location.name)}</span>
            ${location.address ? `<span class="calendar-location-address">${escapeHtml(location.address)}</span>` : ''}
          </span>
        </span>
      `;
    }

    function getStatusClass(event) {
      return String(event.status || '').toLowerCase().split(' ')[0];
    }

    function renderStatusBadge(event) {
      if (!event.status) return '';
      return `<span class="calendar-status-badge status-${escapeHtml(getStatusClass(event))}">${escapeHtml(event.status)}</span>`;
    }

    function isCancelledEvent(event) {
      return ['cancelled', 'canceled'].includes(getStatusClass(event));
    }

    function renderEventActions(event) {
      if (isCancelledEvent(event)) return '';

      return `
        <div class="calendar-event-actions">
          <a href="${event.detailsUrl || 'https://pbc.gov/cal/event/fullcalendar?ViewType=P'}" class="btn btn-pbc btn-sm">View Details</a>
          <a href="${createIcsHref(event)}" download="${event.date}-${event.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.ics" class="btn btn-pbc-outline btn-sm">Add to Calendar</a>
          ${renderLocationAction(event)}
        </div>
      `;
    }
  
    function eventMatchesType(event) {
      if (selectedType === 'all') return true;
      if (selectedType === 'virtual') return isVirtualEvent(event);
      if (selectedType === 'public notice') return event.source && event.source.toLowerCase().includes('public notice');
      if (selectedType === 'meeting') return ['meeting', 'workshop', 'hearing', 'procurement', 'committee', 'public notice', 'bcc', 'planning', 'zoning'].includes(event.type.toLowerCase());
      if (selectedType === 'board') return event.type.toLowerCase() === 'board';
      return event.type.toLowerCase() === selectedType;
    }

    function getDisplayedMonthDate() {
      return new Date(calendarYear, displayedMonth, 1);
    }

    function getDisplayedMonthName(format = 'long') {
      return getDisplayedMonthDate().toLocaleString('en-US', { month: format });
    }

    function getDisplayedMonthLabel() {
      return `${getDisplayedMonthName()} ${calendarYear}`;
    }

    function getVisibleEvents() {
      return calendarEvents.filter(event => {
        const eventDate = toDate(event.date);
        return eventDate.getMonth() === displayedMonth && eventDate.getFullYear() === calendarYear && eventMatchesType(event);
      }).sort((firstEvent, secondEvent) => toCalendarDate(firstEvent.date, firstEvent.startTime) - toCalendarDate(secondEvent.date, secondEvent.startTime));
    }

    function getAnnualResultEvents() {
      return calendarEvents.filter(event => {
        const eventDate = toDate(event.date);
        const matchesAnnualCategory = selectedType === 'all'
          ? true
          : eventMatchesType(event);
        return eventDate.getFullYear() === calendarYear && matchesAnnualCategory;
      }).sort((firstEvent, secondEvent) => toCalendarDate(firstEvent.date, firstEvent.startTime) - toCalendarDate(secondEvent.date, secondEvent.startTime));
    }

    function showsAnnualResults() {
      return !selectedDate && (selectedType === 'all' || annualMeetingCategories.includes(selectedType));
    }

    function getResultEvents() {
      if (showsAnnualResults()) return getAnnualResultEvents();
      if (selectedDate) return getEventsForDate(selectedDate);
      return getVisibleEvents();
    }

    function getEventsForDate(dateValue) {
      if (!dateValue) return getVisibleEvents();
      return getVisibleEvents().filter(event => event.date === dateValue);
    }

    function getResultsHeading() {
      if (selectedDate) return formatDateHeading(selectedDate);
      if (selectedType === 'all' && showsAnnualResults()) return `All ${calendarYear} Meetings`;
      if (showsAnnualResults()) {
        const activeButton = document.querySelector(`[data-calendar-type="${selectedType}"]`);
        return `All ${calendarYear} ${activeButton ? activeButton.textContent : selectedType}`;
      }
      const activeButton = document.querySelector(`[data-calendar-type="${selectedType}"]`);
      return `${activeButton ? activeButton.textContent : selectedType} events in ${getDisplayedMonthLabel()}`;
    }

    function getResultsCountText(count) {
      if (count === 0) return 'There are <span class="calendar-results-count-number">no</span> meetings';
      if (count === 1) return 'There is <span class="calendar-results-count-number">1</span> meeting';
      return `There are <span class="calendar-results-count-number">${count}</span> meetings`;
    }

    function createPagerButton(label, page, options = {}) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = options.className || 'department-pager-btn';
      button.textContent = label;

      if (options.icon) {
        button.innerHTML = options.icon;
      }

      if (options.disabled) {
        button.disabled = true;
      }

      if (options.current) {
        button.classList.add('is-current');
        button.setAttribute('aria-current', 'page');
      }

      if (options.label) {
        button.setAttribute('aria-label', options.label);
      }

      button.addEventListener('click', () => {
        if (button.disabled || currentResultsPage === page) return;
        currentResultsPage = page;
        renderCalendar();
        calendarSelectedDateHeading.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      return button;
    }

    function createPagerEllipsis() {
      const ellipsis = document.createElement('span');
      ellipsis.className = 'department-pager-ellipsis';
      ellipsis.textContent = '...';
      ellipsis.setAttribute('aria-hidden', 'true');
      return ellipsis;
    }

    function getPageNumbers(totalPages) {
      if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, index) => index + 1);
      }

      if (currentResultsPage <= 4) {
        return [1, 2, 3, 4, 'ellipsis-end', totalPages];
      }

      if (currentResultsPage >= totalPages - 3) {
        return [1, 'ellipsis-start', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      }

      return [1, 'ellipsis-start', currentResultsPage - 1, currentResultsPage, currentResultsPage + 1, 'ellipsis-end', totalPages];
    }

    function renderPager(totalPages) {
      if (!calendarPager) return;

      calendarPager.innerHTML = '';
      calendarPager.hidden = totalPages <= 1;

      if (totalPages <= 1) return;

      calendarPager.appendChild(createPagerButton('', Math.max(1, currentResultsPage - 1), {
        className: 'department-pager-text',
        disabled: currentResultsPage === 1,
        icon: '<i class="fa-solid fa-chevron-left" aria-hidden="true"></i><span>Prev</span>',
        label: 'Previous page'
      }));

      getPageNumbers(totalPages).forEach(page => {
        if (typeof page === 'string') {
          calendarPager.appendChild(createPagerEllipsis());
          return;
        }

        calendarPager.appendChild(createPagerButton(String(page), page, {
          current: page === currentResultsPage,
          label: `Page ${page}`
        }));
      });

      calendarPager.appendChild(createPagerButton('', Math.min(totalPages, currentResultsPage + 1), {
        className: 'department-pager-text',
        disabled: currentResultsPage === totalPages,
        icon: '<span>Next</span><i class="fa-solid fa-chevron-right" aria-hidden="true"></i>',
        label: 'Next page'
      }));
    }

    function formatDateHeading(dateValue) {
      return toDate(dateValue).toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    }

    function getTodayDateValue() {
      const today = new Date();
      return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    }

    function getFeaturedPools(visibleEvents) {
      const todayDateValue = getTodayDateValue();
      const selectedEvents = selectedDate ? getEventsForDate(selectedDate) : [];
      const todayEvents = visibleEvents.filter(event => event.date === todayDateValue);

      return {
        month: visibleEvents,
        today: todayEvents,
        selected: selectedEvents
      };
    }

    function getFeaturedScopeLabel(scope) {
      if (scope === 'today') return 'Today';
      if (scope === 'selected') return 'Selected Date';
      return 'This Month';
    }

    function getFeaturedPool(visibleEvents) {
      const pools = getFeaturedPools(visibleEvents);
      if (selectedDate && pools.selected.length) return { scope: 'selected', events: pools.selected };
      if (featuredScope === 'today') return { scope: 'today', events: pools.today };
      return { scope: 'month', events: pools.month };
    }

    function stopFeaturedTimer() {
      if (!featuredTimer) return;
      window.clearInterval(featuredTimer);
      featuredTimer = null;
    }

    function startFeaturedTimer(poolLength) {
      stopFeaturedTimer();
      if (featuredPaused || poolLength <= 1) return;
      featuredTimer = window.setInterval(() => {
        featuredIndex = (featuredIndex + 1) % poolLength;
        renderCalendar();
      }, featuredIntervalMs);
    }

    function renderFeaturedEmpty(scope) {
      if (!calendarFeaturedEvent) return;
      calendarFeaturedEvent.innerHTML = `
        <div class="calendar-featured-content calendar-featured-empty">
          <div class="calendar-featured-topline">
            <span class="calendar-featured-kicker">${escapeHtml(getFeaturedScopeLabel(scope))}</span>
            <div class="calendar-featured-controls" aria-label="Featured meeting controls">
              <button type="button" class="calendar-featured-scope${featuredScope === 'today' ? ' is-active' : ''}" data-featured-scope="today">Today</button>
              <button type="button" class="calendar-featured-scope${featuredScope === 'month' ? ' is-active' : ''}" data-featured-scope="month">Month</button>
              <button type="button" class="calendar-featured-arrow" data-featured-direction="prev" aria-label="Previous featured meeting"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i></button>
              <button type="button" class="calendar-featured-arrow calendar-featured-pause" data-featured-pause aria-label="Pause featured meeting rotation" aria-pressed="false"><i class="fa-solid fa-pause" aria-hidden="true"></i></button>
              <button type="button" class="calendar-featured-arrow" data-featured-direction="next" aria-label="Next featured meeting"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>
            </div>
          </div>
          <h3>No featured meetings found</h3>
          <p>Try the monthly spotlight, another category, or a different highlighted date.</p>
        </div>
      `;
      attachFeaturedControls(0);
    }

    function renderFeaturedEvent(event, poolLength, scope) {
      if (!calendarFeaturedEvent || !event) return;

      const eventDate = toDate(event.date);
      const month = eventDate.toLocaleString('en-US', { month: 'short' });
      const day = String(eventDate.getDate()).padStart(2, '0');
      const statusClass = getStatusClass(event);

      calendarFeaturedEvent.innerHTML = `
        <div class="calendar-featured-image${event.status ? ' has-status' : ''}"${event.status ? ` data-event-status="${escapeHtml(statusClass)}"` : ''}>
          <img src="images/hero/bcc-hero.jpg" alt="Palm Beach County meeting chambers">
          ${renderStatusBadge(event)}
          <span class="calendar-featured-date">
            <strong>${month}</strong>
            <span>${day}</span>
          </span>
        </div>
        <div class="calendar-featured-content${event.status ? ' has-status' : ''}"${event.status ? ` data-event-status="${escapeHtml(statusClass)}"` : ''}>
          <div class="calendar-featured-topline">
            <span class="calendar-featured-kicker">${escapeHtml(getFeaturedScopeLabel(scope))} | ${featuredIndex + 1} of ${poolLength}</span>
            <div class="calendar-featured-controls" aria-label="Featured meeting controls">
              <button type="button" class="calendar-featured-scope${featuredScope === 'today' ? ' is-active' : ''}" data-featured-scope="today">Today</button>
              <button type="button" class="calendar-featured-scope${featuredScope === 'month' ? ' is-active' : ''}" data-featured-scope="month">Month</button>
              <button type="button" class="calendar-featured-arrow" data-featured-direction="prev" aria-label="Previous featured meeting"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i></button>
              <button type="button" class="calendar-featured-arrow calendar-featured-pause" data-featured-pause aria-label="${featuredPaused ? 'Resume featured meeting rotation' : 'Pause featured meeting rotation'}" aria-pressed="${featuredPaused ? 'true' : 'false'}"><i class="fa-solid ${featuredPaused ? 'fa-play' : 'fa-pause'}" aria-hidden="true"></i></button>
              <button type="button" class="calendar-featured-arrow" data-featured-direction="next" aria-label="Next featured meeting"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>
            </div>
          </div>
          <h3>${escapeHtml(event.title)}</h3>
          <p>${escapeHtml(event.description || 'A featured public meeting selected from the meeting calendars.')}</p>
          <div class="calendar-featured-meta">
            <span><i class="fa-solid fa-clock" aria-hidden="true"></i>${escapeHtml(event.startTime)} - ${escapeHtml(event.endTime)}</span>
            ${renderLocationMeta(event)}
          </div>
          ${renderEventActions(event)}
        </div>
      `;
      attachFeaturedControls(poolLength);
    }

    function attachFeaturedControls(poolLength) {
      calendarFeaturedEvent.querySelectorAll('[data-featured-scope]').forEach(button => {
        button.addEventListener('click', () => {
          featuredScope = button.getAttribute('data-featured-scope');
          selectedDate = null;
          currentResultsPage = 1;
          featuredIndex = 0;
          renderCalendar();
        });
      });

      calendarFeaturedEvent.querySelectorAll('[data-featured-direction]').forEach(button => {
        button.disabled = poolLength <= 1;
        button.addEventListener('click', () => {
          const direction = button.getAttribute('data-featured-direction');
          featuredIndex = direction === 'prev'
            ? (featuredIndex - 1 + poolLength) % poolLength
            : (featuredIndex + 1) % poolLength;
          renderCalendar();
        });
      });

      const pauseButton = calendarFeaturedEvent.querySelector('[data-featured-pause]');
      if (pauseButton) {
        pauseButton.disabled = poolLength <= 1;
        pauseButton.addEventListener('click', () => {
          featuredPaused = !featuredPaused;
          renderCalendar();
        });
      }
    }

    function renderDayEvents() {
      if (!calendarGrid || !calendarSelectedDateHeading) return;

      const events = getResultEvents();
      const totalPages = Math.max(1, Math.ceil(events.length / resultsPageSize));
      calendarSelectedDateHeading.textContent = getResultsHeading();
      if (calendarResultsCount) {
        calendarResultsCount.innerHTML = getResultsCountText(events.length);
      }

      if (!events.length) {
        currentResultsPage = 1;
        renderPager(0);
        calendarGrid.innerHTML = `
          <div class="calendar-no-events">
            <span class="calendar-no-events-icon" aria-hidden="true"><i class="fa-solid fa-calendar-check"></i></span>
            <div>
              <h4>No events match this date</h4>
              <p>Try another highlighted date or clear the event type filter.</p>
            </div>
          </div>
        `;
        return;
      }

      currentResultsPage = Math.min(currentResultsPage, totalPages);
      const start = (currentResultsPage - 1) * resultsPageSize;
      const pageEvents = events.slice(start, start + resultsPageSize);

      calendarGrid.innerHTML = pageEvents.map(event => {
        const eventDate = toDate(event.date);
        const month = eventDate.toLocaleString('en-US', { month: 'short' });
        const day = String(eventDate.getDate()).padStart(2, '0');
        const year = eventDate.getFullYear();
  
        return `
          <article class="calendar-event-card${event.status ? ' has-status' : ''}" data-event-type="${escapeHtml(event.type.toLowerCase())}"${event.status ? ` data-event-status="${escapeHtml(getStatusClass(event))}"` : ''}>
            <div class="calendar-event-date">
              <span class="calendar-event-month">${month}</span>
              <span class="calendar-event-day">${day}</span>
              <span class="calendar-event-year">${year}</span>
            </div>
            <div class="calendar-event-content">
              <div class="calendar-event-title-row">
                <h4>${escapeHtml(event.title)}</h4>
                ${renderStatusBadge(event)}
              </div>
              ${event.description ? `<p>${escapeHtml(event.description)}</p>` : ''}
              <div class="calendar-featured-meta">
                <span><i class="fa-solid fa-clock" aria-hidden="true"></i>${escapeHtml(event.startTime)} - ${escapeHtml(event.endTime)}</span>
                ${renderLocationMeta(event)}
              </div>
              ${renderEventActions(event)}
            </div>
          </article>
        `;
      }).join('');
      renderPager(totalPages);
    }

    function renderMonthGrid() {
      if (!calendarMonthGrid) return;

      const visibleEvents = getVisibleEvents();
      const eventsByDate = visibleEvents.reduce((map, event) => {
        map[event.date] = map[event.date] || [];
        map[event.date].push(event);
        return map;
      }, {});
      const firstDay = new Date(calendarYear, displayedMonth, 1).getDay();
      const daysInMonth = new Date(calendarYear, displayedMonth + 1, 0).getDate();
      const previousMonthDays = new Date(calendarYear, displayedMonth, 0).getDate();
      const monthLabel = getDisplayedMonthLabel();
      const cells = [];

      ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(dayName => {
        cells.push(`<span class="calendar-weekday">${dayName}</span>`);
      });

      for (let i = firstDay - 1; i >= 0; i -= 1) {
        cells.push(`<span class="calendar-day-cell is-muted">${previousMonthDays - i}</span>`);
      }

      for (let day = 1; day <= daysInMonth; day += 1) {
        const dateValue = `${calendarYear}-${String(displayedMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dayEvents = eventsByDate[dateValue] || [];
        const isSelected = selectedDate === dateValue;
        const eventLabel = dayEvents.length === 1 ? '1 event' : `${dayEvents.length} events`;

        cells.push(`
          <button type="button" class="calendar-day-cell${dayEvents.length ? ' has-events' : ''}${isSelected ? ' is-selected' : ''}" data-calendar-date="${dateValue}" ${dayEvents.length ? `aria-label="${getDisplayedMonthName()} ${day}, ${eventLabel}"` : `aria-label="${getDisplayedMonthName()} ${day}, no events"`}>
            <span>${day}</span>
            ${dayEvents.length ? `<small>${dayEvents.length}</small>` : ''}
          </button>
        `);
      }

      while ((cells.length - 7) % 7 !== 0) {
        const nextDay = (cells.length - 7 + 1) - (firstDay + daysInMonth);
        cells.push(`<span class="calendar-day-cell is-muted">${nextDay}</span>`);
      }

      calendarMonthGrid.innerHTML = cells.join('');
      calendarMonthGrid.setAttribute('aria-label', `${monthLabel} event calendar`);

      calendarMonthGrid.querySelectorAll('[data-calendar-date]').forEach(button => {
        button.addEventListener('click', () => {
          selectedDate = button.getAttribute('data-calendar-date');
          currentResultsPage = 1;
          featuredIndex = 0;
          renderCalendar();
        });
      });

      if (calendarEventCount) {
        const eventLabel = visibleEvents.length === 1 ? 'event' : 'events';
        calendarEventCount.textContent = `${getDisplayedMonthName()} has ${visibleEvents.length} ${eventLabel}.`;
      }

      if (calendarMonthHeading) {
        calendarMonthHeading.textContent = monthLabel;
      }

      if (calendarPreviousMonth) {
        calendarPreviousMonth.disabled = displayedMonth <= firstCalendarMonth;
      }

      if (calendarNextMonth) {
        calendarNextMonth.disabled = displayedMonth >= lastCalendarMonth;
      }
    }

    function renderCalendar() {
      const visibleEvents = getVisibleEvents();
      const featuredPool = getFeaturedPool(visibleEvents);
      featuredIndex = featuredPool.events.length ? featuredIndex % featuredPool.events.length : 0;
      const featuredEvent = featuredPool.events[featuredIndex];

      if (featuredEvent) {
        renderFeaturedEvent(featuredEvent, featuredPool.events.length, featuredPool.scope);
        startFeaturedTimer(featuredPool.events.length);
      } else {
        stopFeaturedTimer();
        renderFeaturedEmpty(featuredPool.scope);
      }

      renderMonthGrid();
      renderDayEvents();
    }
  
    calendarTypeButtons.forEach(button => {
      button.addEventListener('click', () => {
        selectedType = button.getAttribute('data-calendar-type');
        selectedDate = null;
        currentResultsPage = 1;
        featuredIndex = 0;

        calendarTypeButtons.forEach(currentButton => {
          const isActive = currentButton === button;
          currentButton.classList.toggle('active', isActive);
          currentButton.classList.toggle('is-active', isActive);
        });

        renderCalendar();
      });
    });

    if (calendarPreviousMonth) {
      calendarPreviousMonth.addEventListener('click', () => {
        if (displayedMonth <= firstCalendarMonth) return;
        displayedMonth -= 1;
        selectedDate = null;
        currentResultsPage = 1;
        featuredIndex = 0;
        renderCalendar();
      });
    }

    if (calendarNextMonth) {
      calendarNextMonth.addEventListener('click', () => {
        if (displayedMonth >= lastCalendarMonth) return;
        displayedMonth += 1;
        selectedDate = null;
        currentResultsPage = 1;
        featuredIndex = 0;
        renderCalendar();
      });
    }
  
    renderCalendar();
});
