package com.teamcollab.api.controller;

import com.teamcollab.api.model.EpicDetails;
import com.teamcollab.api.model.ProductTeam;
import io.swagger.annotations.ApiResponse;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Iterator;
import java.util.concurrent.TimeUnit;

@RestController
public class ProductTeamController {
    private static String _baseURL = "https://jira.solium.com/rest/api/2/";
    private static OkHttpClient _client = new OkHttpClient().newBuilder()
            .readTimeout(30, TimeUnit.SECONDS)
            .build();


    //urrently it is basic auth that has been used. Create token with jira username and password using command: echo -n username:password | base64
    private static String _basicAuth = "Basic token";

    @GetMapping("/product-teams")
    @ApiResponse(code = 200, message = "OK")
    public ResponseEntity<Object> getProductTeams() throws IOException {


        String editIssueUrl = _baseURL + "issue/DEV-66237/editmeta";
        Request request = new Request.Builder()
                .url(editIssueUrl)
                .method("GET", null)
                .addHeader("Authorization",_basicAuth)
                .addHeader("Content-Type", "application/json")
                .build();
        Response response = _client.newCall(request).execute();

        String jsonString = response.body().string();
        JSONObject object = new JSONObject(jsonString);

        JSONArray teams = object.getJSONObject("fields").getJSONObject("customfield_13321").getJSONArray("allowedValues");
        JSONArray teamNames = new  JSONArray();
        int teamCount=0;

        Iterator<Object> iterator = teams.iterator();
        while (iterator.hasNext()){
            JSONObject team = (JSONObject) iterator.next();
            ProductTeam productTeam = new ProductTeam(team.getString("value"));
            teamNames.put(productTeam.getTeamName());
            teamCount++;

        }

        JSONObject result = new JSONObject();
        result.put("totalTeams",teamCount);
        result.put("teamNames",teamNames);

        return ResponseEntity.ok()
                .body(result.toMap());
    }

    @GetMapping("/product-team/epics")
    @ApiResponse(code = 200, message = "OK")
    public ResponseEntity<Object> getProductTeamEpics(@RequestParam(value="teamName") String teamName) throws IOException {

        String teamEpicsUrl = _baseURL + "search?jql=project in (DEV, MS, UBS, FINR, RET, MSWC) AND status not in (Closed, \"Closed - Duplicate\") AND type = Epic "+
                "AND \"Product Team\" = " + teamName + "";

        ProductTeam productTeam = new ProductTeam(teamName);
        System.out.println(productTeam.getTeamName());
        Request request = new Request.Builder()
                .url(teamEpicsUrl)
                .method("GET", null)
                .addHeader("Authorization",_basicAuth)
                .build();

        Response response = _client.newCall(request).execute();
        String jsonString = response.body().string();
        JSONObject object = new JSONObject(jsonString);

        JSONArray teamEpics = new JSONArray();
        JSONObject result = new JSONObject();

        try{
            if (object.getInt("total") != 0) {
                JSONArray epics = object.getJSONArray("issues");

                Iterator<Object> iterator = epics.iterator();
                while (iterator.hasNext()) {
                    JSONObject epic = (JSONObject) iterator.next();
                    EpicDetails epicDetails = new EpicDetails(epic.getString("key"));
                    epicDetails.setName(epic.getJSONObject("fields").getString("summary"));
                    epicDetails.setStatus(epic.getJSONObject("fields").getJSONObject("status").getString("name"));
                    teamEpics.put(epicDetails);
                }
            }


            result.put("total",object.getInt("total"));
            result.put("epics",teamEpics);
        }

        catch (Exception exception){

             System.out.println(teamEpicsUrl);
        }

        return ResponseEntity.ok()
                .body(result.toMap());
    }
}
