VERSION 5.00
Begin VB.Form frmTestClarityII 
   AutoRedraw      =   -1  'True
   Caption         =   "Test Clarity II"
   ClientHeight    =   13320
   ClientLeft      =   60
   ClientTop       =   345
   ClientWidth     =   5085
   Icon            =   "frmTestClarityII.frx":0000
   LinkTopic       =   "Form1"
   ScaleHeight     =   13320
   ScaleWidth      =   5085
   StartUpPosition =   3  'Windows Default
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   27
      Left            =   3570
      TabIndex        =   61
      Top             =   11520
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   26
      Left            =   3570
      TabIndex        =   59
      Top             =   11100
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   10
      Left            =   3570
      TabIndex        =   57
      Top             =   4350
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   19
      Left            =   3570
      TabIndex        =   55
      Top             =   8145
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   18
      Left            =   3570
      TabIndex        =   53
      Top             =   7725
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   3
      Left            =   3570
      TabIndex        =   51
      Top             =   1362
      Width           =   1395
   End
   Begin VB.CheckBox chkUseDataReady 
      Caption         =   "Use DataReady"
      Height          =   915
      Left            =   180
      TabIndex        =   50
      Top             =   3270
      Width           =   1155
   End
   Begin VB.CommandButton cmdRoofClose 
      Caption         =   "Force Roof Close"
      Height          =   585
      Left            =   150
      TabIndex        =   49
      Top             =   8880
      Width           =   1065
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   25
      Left            =   3570
      TabIndex        =   47
      Top             =   10680
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   24
      Left            =   3570
      TabIndex        =   45
      Top             =   10260
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   23
      Left            =   3570
      TabIndex        =   43
      Top             =   9810
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   22
      Left            =   3570
      TabIndex        =   41
      Top             =   9420
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   21
      Left            =   3570
      TabIndex        =   39
      Top             =   8985
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   20
      Left            =   3570
      TabIndex        =   37
      Top             =   8565
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   17
      Left            =   3570
      TabIndex        =   35
      Top             =   7290
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   16
      Left            =   3570
      TabIndex        =   33
      Top             =   6870
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   15
      Left            =   3570
      TabIndex        =   31
      Top             =   6450
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   14
      Left            =   3570
      TabIndex        =   29
      Top             =   6015
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   13
      Left            =   3570
      TabIndex        =   27
      Top             =   5595
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   12
      Left            =   3570
      TabIndex        =   25
      Top             =   5175
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   11
      Left            =   3570
      TabIndex        =   23
      Top             =   4755
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   9
      Left            =   3570
      TabIndex        =   21
      Top             =   3906
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   8
      Left            =   3570
      TabIndex        =   19
      Top             =   3482
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   7
      Left            =   3570
      TabIndex        =   17
      Top             =   3058
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   6
      Left            =   3570
      TabIndex        =   15
      Top             =   2634
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   5
      Left            =   3570
      TabIndex        =   13
      Top             =   2210
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   4
      Left            =   3570
      TabIndex        =   11
      Top             =   1786
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   2
      Left            =   3570
      TabIndex        =   9
      Top             =   938
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   1
      Left            =   3570
      TabIndex        =   7
      Top             =   514
      Width           =   1395
   End
   Begin VB.TextBox txtProperty 
      Height          =   285
      Index           =   0
      Left            =   3570
      TabIndex        =   5
      Top             =   90
      Width           =   1395
   End
   Begin VB.TextBox txtDataFile 
      BeginProperty Font 
         Name            =   "Courier New"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   795
      Left            =   390
      MultiLine       =   -1  'True
      TabIndex        =   4
      Top             =   12360
      Width           =   4305
   End
   Begin VB.Timer tmrRepeatPeriod 
      Enabled         =   0   'False
      Left            =   300
      Top             =   7680
   End
   Begin VB.TextBox txtRepeatPeriod 
      Height          =   285
      Left            =   120
      TabIndex        =   2
      Text            =   "0"
      Top             =   1830
      Width           =   555
   End
   Begin VB.CommandButton cmdPoll 
      Caption         =   "Poll"
      Height          =   555
      Left            =   120
      TabIndex        =   0
      Top             =   120
      Width           =   555
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "FirmwareVersion"
      Height          =   225
      Index           =   27
      Left            =   1470
      TabIndex        =   62
      Top             =   11550
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "ClarityIIVersion"
      Height          =   225
      Index           =   22
      Left            =   1470
      TabIndex        =   60
      Top             =   11130
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "DayLightV"
      Height          =   225
      Index           =   23
      Left            =   1470
      TabIndex        =   58
      Top             =   4380
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "VDayThreshV"
      Height          =   225
      Index           =   26
      Left            =   1470
      TabIndex        =   56
      Top             =   8175
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "DayThreshV"
      Height          =   225
      Index           =   25
      Left            =   1470
      TabIndex        =   54
      Top             =   7755
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "DayCondition"
      Height          =   225
      Index           =   24
      Left            =   1470
      TabIndex        =   52
      Top             =   1392
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "RoofCloseRequested"
      Height          =   225
      Index           =   21
      Left            =   1470
      TabIndex        =   48
      Top             =   10710
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "SecondsSinceGoodData"
      Height          =   225
      Index           =   20
      Left            =   1470
      TabIndex        =   46
      Top             =   10290
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "WindUnits"
      Height          =   225
      Index           =   19
      Left            =   1470
      TabIndex        =   44
      Top             =   9870
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "Fahrenheit"
      Height          =   225
      Index           =   18
      Left            =   1470
      TabIndex        =   42
      Top             =   9450
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "WetThreshV"
      Height          =   225
      Index           =   17
      Left            =   1470
      TabIndex        =   40
      Top             =   9015
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "RainThreshV"
      Height          =   225
      Index           =   16
      Left            =   1470
      TabIndex        =   38
      Top             =   8595
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "VWindyThreshSpeed"
      Height          =   225
      Index           =   15
      Left            =   1470
      TabIndex        =   36
      Top             =   7320
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "WindyThreshSpeed"
      Height          =   225
      Index           =   14
      Left            =   1470
      TabIndex        =   34
      Top             =   6900
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "VCloudyThreshT"
      Height          =   225
      Index           =   13
      Left            =   1470
      TabIndex        =   32
      Top             =   6480
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "CloudyThreshT"
      Height          =   225
      Index           =   12
      Left            =   1470
      TabIndex        =   30
      Top             =   6045
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "HeaterPercent"
      Height          =   225
      Index           =   11
      Left            =   1470
      TabIndex        =   28
      Top             =   5625
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "WetF"
      Height          =   225
      Index           =   10
      Left            =   1470
      TabIndex        =   26
      Top             =   5205
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "RainF"
      Height          =   225
      Index           =   9
      Left            =   1470
      TabIndex        =   24
      Top             =   4785
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "DewPointT"
      Height          =   225
      Index           =   8
      Left            =   1470
      TabIndex        =   22
      Top             =   3936
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "HumidityPercent"
      Height          =   225
      Index           =   7
      Left            =   1470
      TabIndex        =   20
      Top             =   3512
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "Wind"
      Height          =   225
      Index           =   6
      Left            =   1470
      TabIndex        =   18
      Top             =   3088
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "SensorT"
      Height          =   225
      Index           =   5
      Left            =   1470
      TabIndex        =   16
      Top             =   2664
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "AmbientT"
      Height          =   225
      Index           =   4
      Left            =   1470
      TabIndex        =   14
      Top             =   2240
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "RelSkyT"
      Height          =   225
      Index           =   3
      Left            =   1470
      TabIndex        =   12
      Top             =   1816
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "RainCondition"
      Height          =   225
      Index           =   2
      Left            =   1470
      TabIndex        =   10
      Top             =   968
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "WindCondition"
      Height          =   225
      Index           =   1
      Left            =   1470
      TabIndex        =   8
      Top             =   544
      Width           =   1875
   End
   Begin VB.Label lblPropertyName 
      Caption         =   "CloudCondition"
      Height          =   225
      Index           =   0
      Left            =   1470
      TabIndex        =   6
      Top             =   120
      Width           =   1875
   End
   Begin VB.Label lblDataFile 
      Caption         =   "Data File "
      Height          =   195
      Left            =   420
      TabIndex        =   3
      Top             =   12060
      Width           =   945
   End
   Begin VB.Label Label7 
      Caption         =   "Repeat poll period in seconds"
      Height          =   585
      Left            =   120
      TabIndex        =   1
      Top             =   1110
      Width           =   945
   End
End
Attribute VB_Name = "frmTestClarityII"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
'TestClarityII - Test the Clarity II COM and data file interfaces  20080517
'Copyright (C) 2006 Boltwood Systems Corporation

'Revisions:

'Version 3.002:
' - use of Public Property Get ClarityIIVersion() As String added.
' - use of Public Property Get FirmwareVersion() As Integer added.

'Version 2.036:
' - removed use of Mph and added WindUnits.

'Version 2.024:
' - added use of the daylight sensor.

'Version 2.020:
' - added optional use of DataReady.



'Be sure to examine the form properties.  AutoRedraw is not
'at the default value, among others.

'This crude program allows you:
'  - press the Poll button to update the property and data file fields.
'  - fill in the "Repeat poll ..." field and press the Enter key.
'    To stop the repeated polling, change this field back to 0.
'  - push "Force Roof Close" to call the RoofClose method.

'It also polls and displays the file noted in the registry by Clarity II in
'order to test the Data File option.  To use this, in Clarity II's setup window
'press the Data File button and set up the file.  Then start up TestClarityII.
'TestClarityII reads this registry entry only when it first starts up.

'You may run many instances of this program to test that aspect of the
'COM interface to ClarityII.exe.


Option Explicit

'Change the version in the project properties too.
Private Const version = "3.002"


'Values for the enum properties in the Cloud Sensor II object.
Public Enum CloudCond
   cloudUnknown = 0
   'Below are based upon thresholds set in the setup window.
   cloudClear = 1
   cloudCloudy = 2
   cloudVeryCloudy = 3
End Enum

Public Enum WindCond
   windUnknown = 0
   'Below are based upon thresholds set in the setup window.
   windCalm = 1
   windWindy = 2
   windVeryWindy = 3
End Enum

Public Enum RainCond
   rainUnknown = 0
   'Below are based upon thresholds set in the setup window.
   rainDry = 1
   rainWet = 2      'sensor has water on it
   rainRain = 3     'falling rain drops detected
End Enum

Public Enum DayCond
   dayUnknown = 0
   'Below are based upon thresholds set in the setup window.
   dayDark = 1
   dayLight = 2
   dayVeryLight = 3
End Enum


'COM or ActiveX object with the Cloud Sensor II data.
Private cloud As Object

Dim datafile As String                  'data file path\name
Dim iClarityDataFile As Integer         'data file unit #


Private Sub Form_Load()
    'Get and show the executable's version number in the form's caption.
    frmTestClarityII.Caption = "TestClarityII  V" & version

    'Create the Cloud Sensor object so we can get at Cloud Sensor data.
    'Do not use New for this!  If you use New, your executable might not
    'work with the next version of Clarity II because VB6 might change the
    'class ID when we recompile Clarity II at the factory.
    Set cloud = CreateObject("ClarityII.CloudSensorII")
    
    'Set up the Cloud Sensor's single line data file for read if we can.
    On Error Resume Next
    iClarityDataFile = 1
    datafile = GetSetting("BoltwoodSystems", "ClarityII", "frmClarity.datafile", "")
    If ((Err <> 0) Or (datafile = "")) Then
       txtDataFile.Text = "no data file path\name in local registry"
       Err = 0
    Else
       lblDataFile.Caption = "Data File " & datafile
    End If
    On Error GoTo 0
End Sub


Private Sub Form_Unload(x As Integer)
    On Error Resume Next
    Set cloud = Nothing
    Close #iClarityDataFile
    tmrRepeatPeriod.Enabled = False
    End
End Sub


Private Sub cmdRoofClose_Click()
    Call cloud.RoofClose
End Sub


'Each time the poll button is pressed, update the displayed data.
Private Sub cmdPoll_Click()
    Dim s As String
    
    'Optionally use the DataReady class function.
    If (chkUseDataReady) Then
        If (Not cloud.DataReady) Then
            'Data is not ready so exit.
            Exit Sub
        End If
    End If
    
    'Show the data from the Cloud Sensor.
    txtProperty(0).Text = cloud.CloudCondition
    DoEvents
    txtProperty(1).Text = cloud.WindCondition
    DoEvents
    txtProperty(2).Text = cloud.RainCondition
    DoEvents
    txtProperty(3).Text = cloud.DayCondition
    DoEvents
    txtProperty(4).Text = cloud.RelSkyT
    DoEvents
    txtProperty(5).Text = cloud.AmbientT
    DoEvents
    txtProperty(6).Text = cloud.SensorT
    DoEvents
    txtProperty(7).Text = cloud.Wind
    DoEvents
    txtProperty(8).Text = cloud.HumidityPercent
    DoEvents
    txtProperty(9).Text = cloud.DewPointT
    DoEvents
    txtProperty(10).Text = cloud.DayLightV
    DoEvents
    txtProperty(11).Text = cloud.RainF
    DoEvents
    txtProperty(12).Text = cloud.WetF
    DoEvents
    txtProperty(13).Text = cloud.HeaterPercent
    DoEvents
    txtProperty(14).Text = cloud.CloudyThreshT
    DoEvents
    txtProperty(15).Text = cloud.VCloudyThreshT
    DoEvents
    txtProperty(16).Text = cloud.WindyThreshSpeed
    DoEvents
    txtProperty(17).Text = cloud.VWindyThreshSpeed
    DoEvents
    txtProperty(18).Text = cloud.DayThreshV
    DoEvents
    txtProperty(19).Text = cloud.VDayThreshV
    DoEvents
    txtProperty(20).Text = cloud.RainThreshV
    DoEvents
    txtProperty(21).Text = cloud.WetThreshV
    DoEvents
    txtProperty(22).Text = cloud.Fahrenheit
    DoEvents
    txtProperty(23).Text = cloud.WindUnits
    DoEvents
    txtProperty(24).Text = cloud.SecondsSinceGoodData
    DoEvents
    txtProperty(25).Text = cloud.RoofCloseRequested
    DoEvents
    txtProperty(26).Text = cloud.ClarityIIVersion
    DoEvents
    txtProperty(27).Text = cloud.FirmwareVersion
    DoEvents
   
    'Open and read the Cloud Sensor's data file if we can.
    If (datafile <> "") Then
        On Error Resume Next
        Open datafile For Input As iClarityDataFile
        If (Err = 0) Then
            Line Input #iClarityDataFile, s
            txtDataFile.Text = s
            Close #iClarityDataFile
        Else
            txtDataFile.Text = "Data File Error " & Err.Description
            Err = 0
            Close #iClarityDataFile
        End If
        On Error GoTo 0
    Else
       txtDataFile.Text = "no data file path\name in local registry"
    End If
End Sub


'One way of completing a period entry (return key).
Private Sub txtRepeatPeriod_KeyPress(key As Integer)
    If (key = vbKeyReturn) Then
        key = 0
        Call txtRepeatPeriod_LostFocus
    End If
End Sub


'The other way of completing a period entry (moving the focus elsewhere).
Private Sub txtRepeatPeriod_LostFocus()
    Dim period As Double
    
    On Error Resume Next
    period = CDbl(txtRepeatPeriod.Text)
    If (Err = 0) Then
        If (period > 0#) Then
            'Set up and enable the timer that will "push" the poll button
            'repeatedly for you.
            tmrRepeatPeriod.Interval = period * 1000#
            tmrRepeatPeriod.Enabled = True
        Else
            tmrRepeatPeriod.Enabled = False
        End If
    Else
        tmrRepeatPeriod.Enabled = False
    End If
End Sub


'"Push" the poll button when each period times out.
Private Sub tmrRepeatPeriod_Timer()
    Call cmdPoll_Click
End Sub

