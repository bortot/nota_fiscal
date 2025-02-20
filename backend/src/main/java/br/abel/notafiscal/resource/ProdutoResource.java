package br.abel.notafiscal.resource;

import br.abel.notafiscal.entity.Produto;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@Path("/produto")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@ApplicationScoped
public class ProdutoResource {

    @GET
    @Path("/{id}")
    public Produto findById(@PathParam("id") Long id) {
        return Produto.findById(id);
    }

    @GET
    @Path("count")
    public long count() {
        return Produto.count();
    }

    @GET
    public Map<String, Object> page(@QueryParam("index") Integer index, @QueryParam("size") Integer size) {
        return Map.of(
                "data", Produto.findAll().page(index, size).list(),
                "totalRecords", Produto.count());
    }

    @POST
    @Transactional
    public Produto create(Produto entity) {
        Produto.persist(entity);
        return entity;
    }

}
